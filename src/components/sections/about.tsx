
export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto max-w-7xl px-4 py-20">
      <div className="relative py-24 min-h-[60vh] flex items-center justify-center bg-background/80">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary drop-shadow-lg">About Me</h2>
          <div className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-2xl animate-pulse z-0" />
            <p className="relative z-10 text-lg md:text-xl text-foreground/90 leading-relaxed font-medium mb-8">
              Hi, I'm Mitadru Roy—a creative developer passionate about building digital experiences that blend art, code, and interaction. My journey is a fusion of design thinking, technical curiosity, and a love for playful, immersive interfaces.<br /><br />
              Whether it's crafting a 3D animation, designing a pixel-perfect UI, or engineering a seamless user flow, I thrive on turning ideas into reality. I believe in the power of technology to inspire, connect, and delight.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="px-6 py-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg border border-primary/10 backdrop-blur-md">
                <span className="text-2xl font-bold text-primary">🎨</span>
                <div className="mt-2 text-base font-semibold text-foreground/80">Design-Driven</div>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg border border-primary/10 backdrop-blur-md">
                <span className="text-2xl font-bold text-accent">⚡</span>
                <div className="mt-2 text-base font-semibold text-foreground/80">Interactive</div>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg border border-primary/10 backdrop-blur-md">
                <span className="text-2xl font-bold text-secondary">🧠</span>
                <div className="mt-2 text-base font-semibold text-foreground/80">Curious</div>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg border border-primary/10 backdrop-blur-md">
                <span className="text-2xl font-bold text-primary">🌐</span>
                <div className="mt-2 text-base font-semibold text-foreground/80">Web Explorer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Interests & Hobbies */}
      <div className="mt-20">
        <h3 className="mb-12 text-center font-headline text-3xl text-primary">Beyond Code</h3>
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-3 lg:grid-cols-6 mb-12">
          <div className="group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-white/10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="h-8 w-8 text-white mx-auto mb-3 text-3xl block">🎸</span>
            <p className="text-white font-medium text-sm drop-shadow-md">Guitar & Music</p>
          </div>
          <div className="group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-white/10 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="h-8 w-8 text-white mx-auto mb-3 text-3xl block">🎮</span>
            <p className="text-white font-medium text-sm drop-shadow-md">Gaming</p>
          </div>
          <div className="group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-white/10 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="h-8 w-8 text-white mx-auto mb-3 text-3xl block">🎬</span>
            <p className="text-white font-medium text-sm drop-shadow-md">Movies & Anime</p>
          </div>
          <div className="group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-white/10 bg-gradient-to-r from-green-500 via-lime-500 to-yellow-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="h-8 w-8 text-white mx-auto mb-3 text-3xl block">🌏</span>
            <p className="text-white font-medium text-sm drop-shadow-md">Travel & Culture</p>
          </div>
          <div className="group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-white/10 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="h-8 w-8 text-white mx-auto mb-3 text-3xl block">📷</span>
            <p className="text-white font-medium text-sm drop-shadow-md">Photography</p>
          </div>
          <div className="group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-white/10 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="h-8 w-8 text-white mx-auto mb-3 text-3xl block">📚</span>
            <p className="text-white font-medium text-sm drop-shadow-md">Reading</p>
          </div>
        </div>
      </div>
    </section>
  );
}
