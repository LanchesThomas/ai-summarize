const Footer = () => {
        return (
                <footer className="w-full h-10  absolute bottom-0 flex flex-col md:flex-row justify-between items-center mb-5 px-[10%]">
                        <p className="font-satoshi">
                                Made by{' '}
                                <a
                                        href="https://www.lanchesthomas.com/"
                                        className="text-blue-500 font-bold"
                                >
                                        Lanches Thomas
                                </a>
                        </p>
                        <p>All credits to Javascript Mastery</p>
                </footer>
        );
};

export default Footer;
