import bgImage from "../../assets/Blogs/blog-bannar.png";

const Banner = () => {
  return (
    <div
      className="text-white px-6 py-20 rounded"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "repeat",
        backgroundSize: "150px",
        backgroundColor: "#1e3a8a", // Tailwind's blue-900
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="font-bold" style={{ fontSize: "2.5rem" }}>
          Blogs and Updates | Dealsmagnet
        </h1>
      </div>
    </div>
  );
};

export default Banner;
