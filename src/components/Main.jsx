import bgMain from "../assets/img/bg.jpg";
import logo from "../assets/img/logo.png";

const Main = () => {
  return (
    <div id="main">
      {/* Backgroud hero */}
      <img src={bgMain} className="w-full h-screen object-cover" alt="/" />

      {/* Container main */}
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 justify-center">
        <div className="w-48 h-48 p-3">
          <img src={logo} alt="logo estudio car" />
        </div>

        <div className="max-w-[850px] m-auto h-96 px-5 w-full absolute bottom-44 md:bottom-24">
          <div className="border-l-4 border-orange-800 p-2">
            <h1 className="text-3xl md:text-5xl font-bold text-orange-700">
              Descubra as melhores ofertas de carros e motos seminovos!
              Economize e acelere com a nossa revenda de confiança.
            </h1>
            <h2 className="text-base mt-2 md:mt-5 md:text-xl md:font-bold text-orange-950">
              Encontre seu veículo dos sonhos na nossa revenda premium de carros
              e motos. Qualidade excepcional, preços irresistíveis e uma
              experiência de compra incrível aguardam por você!
            </h2>
          </div>

          <div className="flex justify-center md:justify-start mt-5">
            <a
              href="https://wa.me/5596991693224"
              target="_blank"
              rel="noreferrer"
            >
              <button className="py-5 w-64 bg-orange-900 text-gray-200">
                Solicite uma cotação
              </button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-2 left-24 md:bottom-4 md:right-4 flex flex-col md:flex-row md:mt-5 justify-center md:justify-end items-center">
          <div className="text-center">
            <h2 className="text-sm md:text-lg">Área de atendimento</h2>
            <h2 className="font-bold">Macapá - Amapá</h2>
          </div>

          <div className="text-center md:m-3">
            <h2 className="text-sm md:text-lg">contato@ksveiculos.com.br</h2>
            <h2 className="text-sm md:text-lg">96 99169-3224</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
