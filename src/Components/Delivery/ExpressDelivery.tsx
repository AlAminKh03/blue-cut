import { GlassesData } from "../../../public/Data/Glasses";

import SingleCardEx from "../SingleCard/SingleCardEx";
import { GlassesProps } from "./RegularDelivery";

const ExpressDelivery = () => {
  return (
    <div className="grid grid-cols-3 gap-10 p-20">
      {GlassesData.map((glassData: GlassesProps) => {
        return (
          <div key={glassData.name}>
            <SingleCardEx GlassData={glassData} />
          </div>
        );
      })}
    </div>
  );
};

export default ExpressDelivery;
