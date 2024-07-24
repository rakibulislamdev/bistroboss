const Cover = ({ img, title, subTitle }) => {
  return (
    <section>
      <div
        className="hero h-[400px]"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase text-white">
              {title}
            </h1>
            <p className="mb-5 text-white">{subTitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
