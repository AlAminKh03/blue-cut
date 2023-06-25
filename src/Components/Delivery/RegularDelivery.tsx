import { GlassesData } from "../../../public/Data/Glasses";
import SingleCardDel from "../SingleCard/SingleCardDel";
export interface GlassesProps {
  id: number;
  name: string;
  price: string;
  photoUrl: string;
  color: string;
}
const RegularDelivery = () => {
  return (
    <div className="grid grid-cols-3 gap-10 p-20">
      {GlassesData.map((glassData: GlassesProps) => {
        return (
          <div key={glassData.id}>
            <SingleCardDel GlassData={glassData} />
          </div>
        );
      })}
    </div>
  );
};

export default RegularDelivery;
