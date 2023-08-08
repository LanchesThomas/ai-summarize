import { logo } from '../assets';

const Hero = () => {
        return (
                <header className="w-full flex justify-center items-center flex-col">
                        <nav className="flex justify-between items-center w-full mb-10 pt-3">
                                <img
                                        src={logo}
                                        alt=""
                                        className="w-28 object-contain"
                                />
                                <button
                                        type="button"
                                        onClick={() =>
                                                window.open(
                                                        'https://github.com/LanchesThomas/ai-summarize'
                                                )
                                        }
                                        className="black_btn"
                                >
                                        Github
                                </button>
                        </nav>
                        <h1 className="head_text">
                                Résumez vos articles avec <br className='max-md:hidden'/>
                                <span className="orange_gradient">
                                        OpenAI GPT-4
                                </span>
                        </h1>
                        <h2 className='desc'>Simplifiez votre lecture grâce à un résumé de texte open source
        qui transforme de longs articles en résumés clairs et concis</h2>
                </header>
        );
};

export default Hero;
