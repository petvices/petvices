/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/IOkOG0UTK9E
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Link from "next/link"
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';

export function HeroSection() {

////Error de mensaje
const [showMessage, setShowMessage] = useState(false)
  const handleClick = () => {
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  useEffect(() => {
    const button = document.getElementById('openWindowButton');
    button.addEventListener('click', () => {
      window.open('https://forms.gle/NBPnbv4nt7RQtb5T9', '_blank', 'width=600,height=400');
    });
  }, []);

  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header
        className="bg-[#F8C794] px-4 lg:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
        <Image
                src="images/loguito.png"
                width="50"
                height="50"
                alt="Image" 
                className="mx-auto rounded-x1 object-cover"/>
          <h1 className="text-2xl font-bold text-[#2b244f]">Petvices</h1>
        </div>
        <p className="hidden md:block text-[#2b244f]">Conecta con cuidadores de mascotas confiables</p>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFF2D7]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#630A10]">
                  Cuida a tu mascota con confianza
                </h2>
                <p className="max-w-[600px] text-[#911F27] md:text-xl">
                  Petvices te conecta con cuidadores de mascotas confiables y verificados para que puedas dejar a tu
                  mejor amigo en las mejores manos.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#911F27] px-8 text-sm font-medium text-[#ffffff] shadow transition-colors hover:bg-[#2b244f]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Proximamente iOS
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#911F27] px-8 text-sm font-medium text-[#ffffff] shadow transition-colors hover:bg-[#2b244f]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Proximamente Android
                  </Link>
                </div>
              </div>
              <Image
                src="images/inde.png"
                width="500"
                height="350"
                alt="Hero"
                className="mx-auto overflow-hidden rounded-xl object-cover lg:order-last custom-position" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8C794]">
          <div className="container px-4 md:px-6 m-auto">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#630A10]">
                  ¿Cómo funciona Petvices?
                </h2>
                <p
                  className="max-w-[900px] text-[#911F27] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Petvices te conecta con cuidadores de mascotas verificados y confiables en tu área. Puedes reservar
                  servicios como paseos, cuidado en el hogar, veterinaria y más, todo desde la comodidad de tu teléfono.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="images/petvice.jpeg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#630A10]">Reserva fácil</h3>
                      <p className="text-[#911F27]">Encuentra y reserva cuidadores de mascotas con solo unos clics.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#630A10]">Cuidadores verificados</h3>
                      <p className="text-[#911F27]">
                        Todos nuestros cuidadores pasan por un riguroso proceso de verificación.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#630A10]">Servicio confiable</h3>
                      <p className="text-[#911F27]">
                        Disfruta de un servicio de calidad y tranquilidad para ti y tú mascota.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-[#FFF2D7] m-auto">
          <div className="container mx-auto max-w-4xl space-y-8 bg-[#FFF2D7] m-auto">
            <div className="text-center space-y-4 m-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#630A10]">Encuentra cuidadores verificados</h2>
              <p className="text-muted-foreground text-lg md:text-xl text-[#911F27]">
                Nuestra aplicación te permite encontrar cuidadores de mascotas confiables y calificados, con reseñas de
                otros usuarios.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#FCF0C8] rounded-lg shadow-md p-6 space-y-4">
                <SearchIcon className="h-8 w-8 text-[#630A10]" />
                <h3 className="text-xl font-bold text-[#630A10]">Búsqueda fácil</h3>
                <p className="text-muted-foreground text-[#911F27]">Encuentra cuidadores cerca de ti con solo unos clics.</p>
              </div>
              <div className="bg-[#FCF0C8] rounded-lg shadow-md p-6 space-y-4">
                <BadgeCheckIcon className="h-8 w-8 text-[#630A10]" />
                <h3 className="text-xl font-bold text-[#630A10]">Cuidadores verificados</h3>
                <p className="text-muted-foreground text-[#911F27]">Todos nuestros cuidadores pasan por un proceso de verificación y autenticación.</p>
              </div>
              <div className="bg-[#FCF0C8] rounded-lg shadow-md p-6 space-y-4">
                <StarIcon className="h-8 w-8 text-[#630A10]" />
                <h3 className="text-xl font-bold text-[#630A10]">Calificaciones de usuarios</h3>
                <p className="text-muted-foreground text-[#911F27]">Lee las reseñas y calificaciones de otros usuarios.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8C794]">
      <div
        className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 m-auto">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#630A10]">Nuestros Patrocinadores</h2>
          <p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#911F27]">
            Empresas líderes que confían en nosotros y nos apoyan.
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex items-center justify-center px-8">
            <div className="flex items-center justify-center px-8 m-auto">
              <Image className="m-auto"
                src="images/Partners.jpg"
                width="550"
                height="510"
                alt="Sponsor Logo"
               />
            </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-[#FFF2D7]">
          <div className="container mx-auto max-w-4xl space-y-8 bg-[#FFF2D7]">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#630A10]">Beneficios de unirte a Petvices</h2>
              <p className="text-muted-foreground text-lg md:text-xl text-[#911F27]">
              ¿Te apasionan los animales y buscas una forma flexible de ganar dinero? ¡Únete anticipadamente a nuestra plataforma y transforma tu amor por las mascotas en una fuente de ingresos!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#FCF0C8] rounded-lg shadow-md p-6 space-y-4">
                <HomeIcon className="h-8 w-8 text-[#911F27]" />
                <h3 className="text-xl font-bold text-[#911F27]">Flexibilidad Total</h3>
                <p className="text-muted-foreground text-[#911F27]">Trabaja en tus tiempos libres y elige los horarios que mejor se adapten a tu estilo de vida.</p>
              </div>
              <div className="bg-[#FCF0C8] rounded-lg shadow-md p-6 space-y-4">
                <PawPrintIcon className="h-8 w-8 text-[#911F27]" />
                <h3 className="text-xl font-bold text-[#911F27]">Gana Dinero Extra</h3>  
                <p className="text-muted-foreground text-[#911F27]">Aprovecha tu tiempo libre para generar ingresos adicionales haciendo lo que amas.</p>
              </div>
              <div className="bg-[#FCF0C8] rounded-lg shadow-md p-6 space-y-4">
                <DogIcon className="h-8 w-8 text-[#911F27]" />
                <h3 className="text-xl font-bold text-[#911F27]">Tiempo invertido</h3>
                <p className="text-muted-foreground text-[#911F27]">Invierte tu tiempo en el aprendizaje y cuidado de distintos animales.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8C794]">
          <div className="container px-4 md:px-6 m-auto">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#630A10]">
                  Únete a nuestro equipo de cuidadores
                </h2>
                <p
                  className="max-w-[900px] text-[#911F27] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Si eres un amante de las mascotas y quieres formar parte de nuestra red de cuidadores confiables,
                  completa el siguiente formulario.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 rounded-lg p-4 bg-[#F8C794]">
            <div>
            <iframe className="mx-auto grid max-w-5xl items-center gap-6 py-12 rounded-lg p-4 bg-[#F8C794]" src="https://docs.google.com/forms/d/e/1FAIpQLSepEk2WW2St0hRFcOMe5CABK5J7bL0-SDLyIStmXd2JozQOuQ/viewform?usp=sf_link">Cargando...</iframe>
            <Link id="proccess"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd0t9drwg83SEQPRtku__UrxLKB0H8gPd4LHapZMZwaPKic8g/viewform?usp=sf_link"
                    className="inline-flex h-10 items-center text-center rounded-md bg-[#911F27] px-8 text-sm font-medium text-[#ffffff] shadow transition-colors hover:bg-[#2b244f]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Pantalla completa
            </Link>
            
            </div>
            </div>
            {showMessage && (
        <div
          className="text-center left-0 bottom-90 bg-[#911F27] text-[#ffffff] px-4 py-2 rounded-lg text-sm font-medium animate-fade-out">
          Oh, lo sentimos, de momento esto solo es un adorno... luego podras acceder a ello
        </div>
      )}
          </div>
        </section>
      </main>
      <footer id="noUp" className="bg-[#D8AE7E] p-6 md:py-12 w-full">
        <div
          className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm m-auto">
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#630A10]">¿Quienes somos?</h3>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Sobre nosotros
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Equipo
            </Link>
            <Link id="openWindowButton" href="#noUp" className="text-[#FCF0C8]" prefetch={false}>
              Trabaja con nosotros
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Noticias
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#630A10]">Servicios</h3>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Paseos
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Cuidado en el hogar
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Guardería
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Adiestramiento
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Veterinaria
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Productos
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#630A10]">Recursos</h3>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Blog
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Comunidad
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Soporte
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Preguntas frecuentes
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#630A10]">Legal</h3>
            <Dialog>
      <DialogTrigger asChild>
        <Link href="#noUp" className="text-[#FCF0C8]" prefetch={false}>
        Políticas de Servicio
            </Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto bg-[#ffffff]">
        <DialogHeader>
          <DialogTitle>Políticas de Servicio de Petvices.</DialogTitle>
        </DialogHeader>
        <div className="prose max-w-none">
          <p>
          Las presentes Políticas de Servicio (&quot;Políticas&quot;) establecen los términos y condiciones que rigen el uso de la plataforma Petvices (&quot;Plataforma&quot;) y los servicios que se ofrecen a través de ella. Al utilizar Petvices, el Usuario acepta estar sujeto a estas Políticas y a nuestros Términos y Condiciones Generales.
          </p>
          <br />
          <h2><b>Definiciones</b></h2>
          <p>
          Usuario: Toda persona natural o jurídica que se registre en la Plataforma y utilice los servicios ofrecidos.
          
          Petvices: La plataforma en línea que conecta a dueños de mascotas con profesionales del cuidado animal.
          
          Servicios: Los servicios ofrecidos a través de la Plataforma, incluyendo la búsqueda y contratación de paseadores, cuidadores y otros profesionales del cuidado animal.
          </p>
          <br />
          <h2><b>Registro y Creación de Cuenta</b></h2>
          <p>
            Para utilizar Petvices, el Usuario debe registrarse y crear una cuenta, proporcionando información precisa y actualizada.
            el registrarse usted se compromete a utilizar la plataforma de manera responsable y de acuerdo con las leyes aplicables.
            Está prohibido el uso con fines ilegales o dañinos.
          </p>
          <br />
          <h2><b>Uso de la plataforma</b></h2>
          <p>
          Responsabilidad del Usuario: El Usuario es responsable del uso que haga de la Plataforma y de la información que comparta.
          Conducta del Usuario: El Usuario se compromete a utilizar la Plataforma de manera respetuosa y a no realizar actividades que puedan dañar a otros usuarios o a Petvices.
          Seguridad de la Cuenta: El Usuario es responsable de mantener la confidencialidad de su contraseña y de notificar a Petvices inmediatamente si sospecha de cualquier actividad no autorizada.
          </p>
          <br />
          <h2><b>Servicios ofrecidos</b></h2>
          <p>
          Petvices es una plataforma que conecta a dueños de mascotas con profesionales y amateurs del cuidado animal, facilitando la búsqueda en su zona y contratación de estos servicios.
          </p>
          <br />
          <h2><b>Pagos</b></h2>
          <p>
          Métodos de Pago: Petvices ofrece diversos métodos de pago seguros.
          Reembolsos: Las políticas de reembolso se detallan en los Términos y Condiciones Generales.
          </p>
          <br />
          <h2><b>Protección de datos personales</b></h2>
          <p>
          Recopilación y Uso: Petvices recopilará y tratará los datos personales del Usuario con la finalidad de prestar los servicios ofrecidos, cumplir con obligaciones legales y mejorar la experiencia del usuario.
          Consentimiento: El Usuario otorga su consentimiento expreso para el tratamiento de sus datos personales de acuerdo con la Ley Orgánica de Protección de Datos.
          Derechos ARCO: El Usuario tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales.
          Seguridad: Petvices implementará medidas de seguridad técnicas y organizativas adecuadas para proteger los datos personales del Usuario.
          </p>
          <br />
          <h2><b>Responsabilidad de Petvices</b></h2>
          <p>
          Información Proporcionada por Usuarios: Petvices no se hace responsable de la veracidad de la información proporcionada por los usuarios.
          Servicios de Terceros: Petvices no garantiza la calidad de los servicios prestados por terceros.
          Fuerza Mayor: Petvices no será responsable por cualquier incumplimiento de sus obligaciones debido a causas fuera de su control.
          </p>
          <h2><b>Terminación de cuenta</b></h2>
          <p>
          Petvices puede suspender o cancelar la cuenta del Usuario en cualquier momento, sin previo aviso, si incumple estas Políticas.
          </p>
          <br />
          <h2><b>Resolución de controversias</b></h2>
          <p>
          Las partes intentarán resolver cualquier controversia de manera amistosa. En caso de no llegar a un acuerdo, las partes se someterán a la jurisdicción de los tribunales competentes de la ciudad de Caracas, República Bolivariana de Venezuela.
          </p>
          <br />
          <h2><b>Ley aplicable</b></h2>
          <p>
          Estas Políticas se rigen por las leyes de la República Bolivariana de Venezuela
          </p>
          <br />
          <h2><b>Idioma</b></h2>
          <p>
          Estas Políticas se han redactado originalmente en español. En caso de existir alguna discrepancia entre la versión en español y cualquier otra versión, prevalecerá la versión en español.
          </p>
          <br />

        </div>
        <DialogFooter>
          <div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger asChild>
        <Link href="#noUp" className="text-[#FCF0C8]" prefetch={false}>
        Términos de Servicio
            </Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-[#ffffff]">
        <DialogHeader>
          <DialogTitle>Términos de Servicio</DialogTitle>
        </DialogHeader>
        <div className="prose max-w-none">
          <p>
            Bienvenido a nuestra plataforma. Al utilizar nuestros servicios, usted acepta cumplir con estos términos de
            servicio.
          </p>
          <h2>1. Uso de la Plataforma</h2>
          <p>
            Usted se compromete a utilizar la plataforma de manera responsable y de acuerdo con las leyes aplicables.
            Está prohibido el uso con fines ilegales o dañinos.
          </p>
          <h2>2. Propiedad Intelectual</h2>
          <p>
            Todo el contenido y la propiedad intelectual de la plataforma son propiedad de la empresa. Usted no puede
            reproducir, distribuir o modificar este contenido sin autorización.
          </p>
          <h2>3. Privacidad y Datos</h2>
          <p>
            Respetamos su privacidad y nos comprometemos a proteger sus datos personales de acuerdo con nuestra política
            de privacidad.
          </p>
          <h2>4. Limitación de Responsabilidad</h2>
          <p>
            No nos hacemos responsables por cualquier daño o pérdida que pueda resultar del uso de nuestra plataforma.
          </p>
        </div>
        <DialogFooter>
          <div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger asChild>
        <Link href="#noUp" className="text-[#FCF0C8]" prefetch={false}>
        Política de cookies
            </Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-[#ffffff]">
        <DialogHeader>
          <DialogTitle>Política de cookies</DialogTitle>
        </DialogHeader>
        <div className="prose max-w-none">
          <p>
            Hola, aún no tenemos una política establecida ya que no recopilamos por medio de cookies la información
          </p>
          <br />
          <h2><b>De todas formas</b></h2>
          <p>
            Gracias por preocuparte ;)
          </p>
        </div>
        <DialogFooter>
          <div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#630A10]">Contacto</h3>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Soporte
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Ventas
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Prensa
            </Link>
            <Link href="#noUp" className="text-[#FCF0C8]" onClick={handleClick} prefetch={false}>
              Alianzas
            </Link>
          </div>
        </div>
        
      </footer>
    </div>)
  );
}

function PawPrintIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path
        d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>)
  );
}

function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function StarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}
function BadgeCheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>)
  );
}

function DogIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path
        d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path
        d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>)
  );
}


function HomeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}
