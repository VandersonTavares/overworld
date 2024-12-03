import React from 'react';

export const AppDownload = () => {
  return (
    <section className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">Baixe Nosso App</h2>
            <p className="text-gray-300 text-lg mb-8">
              Tenha a academia na palma da sua mão! Acompanhe seus treinos, agende aulas, 
              monitore seu progresso e muito mais com nosso aplicativo exclusivo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-16"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-16"
                />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb"
              alt="App Preview"
              className="rounded-3xl shadow-2xl mx-auto max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};