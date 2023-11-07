import { Footer } from "flowbite-react";
export default function footer() {
  // Renamed function
  return (
    <div>
      <Footer container className=" bottom-0 w-full left-0  bg-gray-50 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:flex sm:justify-between md:flex md:grid-cols-1 ">
            <div className="mb-4 sm:mb-0  flex-col items-center ">
              <img
                src="/assurmatch-banner1.png"
                className="mr-3 h-24 sm:h-28 -ml-2 "
                alt="Assurmatch Banner"
              />
              <p className="text-sm sm:grid-cols-3 ">
                Un court paragraphe qui résume l'essence d'AssurMatch, <br />
                avec une incitation à contacter l'entreprise pour plus<br />
                d'informations.
              </p>
            </div>
            {/* <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 mt-11 "> */}
            <div className="grid grid-cols-2 gap-8  sm:gap-6 mt-11 ">
              <div>
              <Footer.Title title="légales" className="font-roboto text-black dark:text-black font-bold" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Politique de confidentialité
                  </Footer.Link>
                  <Footer.Link href="#">Mentions légales</Footer.Link>
                  <Footer.Link href="#">Conditions d'utilisation</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
              <Footer.Title title="Contact" className="font-roboto text-black dark:text-black font-bold" />
                <Footer.LinkGroup col className="flex">
                  <p className="mr-4">
                     8 rue de l’arrivée 92250 La Garenne Colombes
                  </p>
                  <p> 06 62 65 25 10</p>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="flex justify-start items-center px-3 w-50 h-1">
            <Footer.Copyright href="#" by="Copyright 2023 AssurMatch  " />
          </div>
        </div>
      </Footer>
    </div>
  );
}