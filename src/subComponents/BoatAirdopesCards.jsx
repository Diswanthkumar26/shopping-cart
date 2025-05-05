
import BoatData from "../Data/BoatData";

const BoatAirdopesCards = () => {
  return (
    <div className="px-8 py-6">
      <h2 className="text-3xl font-semibold mb-6">Latest Launched Boat Airdopes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {BoatData.map((boatProduct, index) => (
          <div
            key={index}
            className="rounded p-4 shadow bg-white text-center"
          >
            <img
              src={boatProduct.image}
              alt={boatProduct.name}
              className="mx-auto mb-2 w-[100px] h-[100px] object-cover"
            />
            <p className="font-semibold text-sm">{boatProduct.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoatAirdopesCards;
