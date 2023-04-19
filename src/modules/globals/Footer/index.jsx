export default function () {
  return (
    <footer className="bg-white">
      <div className="container py-12 md:py-20 lg:py-24 px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <p className="mb-2">
              <a href="mailto:info@cruzhandmade.com" className="underline">
                info@cruzhandmade.com
              </a>
            </p>
            <p className="mb-2">Teléfono: +1 (123) 456-7890</p>
            <p className="mb-2">
              Instagram:{" "}
              <a href="https://www.instagram.com/cruzhandmade/" target="_blank" rel="noopener noreferrer" className="underline">
                @cruzhandmade
              </a>
            </p>
          </div>
          <div>
            <p className="text-center lg:text-right">© {new Date().getFullYear()} Cruz Handmade. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
