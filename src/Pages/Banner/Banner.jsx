import { Hero, Section } from 'daisyui';

const Banner = () => {
    return (
        <Hero
      bg="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
      textColor="text-white"
      size="lg"
    >
      <Section>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Your Name</h1>
          <p className="text-2xl mb-8">Web Developer | Designer | Innovator</p>
          <a
            href="#"
            className="btn btn-primary btn-lg"
          >
            View Portfolio
          </a>
        </div>
      </Section>
    </Hero>
    );
};

export default Banner;