// app/api/sendemail/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend("re_QvkWrS2Y_Gfcr554mn8Ztzuom3k69tGvN");

export async function POST(request) {
  try {
    const body = await request.json(); // Aquí se lee el cuerpo de la solicitud
    const { name, email, phone, country, city, role, experience } = body;

    if (!email || !name || !experience || !phone || !country || !role || !city) {
      return NextResponse.json({ success: false, error: 'Faltan datos obligatorios' }, { status: 400 });
    }

    // Envía un correo con las respuestas del formulario
    await resend.emails.send({
      from: 'Petvices <onboarding@resend.dev>',
      to: 'oligarcastudios@gmail.com',
      subject: '¡Nuevo registro de formulario!',
      html: `<p><b>Nombre:</b> ${name}</p><p><b>Correo electronico:</b> ${email}</p><p><b>Telefono:</b> ${phone}</p><p><b>Pais:</b> ${country}</p><p><b>Ciudad:</b> ${city}</p><b>Rol seleccionado:</b> ${role}</p><p><b>Experiencia con mascotas:</b> ${experience}</p>`,
    });

    // Envía un correo de confirmación al usuario
    const response2 = await resend.emails.send({
      from: 'Petvices <onboarding@resend.dev>',
      to: email ,
      subject: '¡Gracias por registrarte!',
      html: `<p>Hola ${name},</p><p>¡Es un placer saludarte! Desde el equipo de Petvices, queremos agradecerte por registrarte como ${role} en nuestra página web para nuestra app. Nos alegra mucho saber que estás interesado/a en formar parte de nuestra comunidad.</p><p>En los próximos días, nos pondremos en contacto contigo para proporcionarte más información detallada a través de este correo electrónico "${email}" o al número de teléfono "${phone}" (Estate atento).</p><p>En Petvices, somos apasionados por los animales y nos tomamos muy en serio la selección de nuestros colaboradores. Todos los candidatos pasarán por un proceso de evaluación diseñado específicamente para asegurar que ofrecemos lo mejor en nuestra app.</p><p>¡Gracias por tu interés y esperamos hablar contigo pronto!</p><p>Este es un mensaje automatizado. Por favor NO responda a este correo electrónico.</p><p>Saludos cordiales,</p><p>El equipo de Petvices</p>`,
    });

    console.log('Correo de confirmación enviado:', response2)

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.json({ success: false, error: 'Error al procesar la solicitud' }, { status: 500 });
  }
}

