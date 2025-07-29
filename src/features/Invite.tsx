import bgImg from "../assets/image 1 (1).jpg";
import flowerImg from "../assets/flower.png";
import { Container } from "../component/Container";
import Icon from "../assets/Icon/Icon";
import { venueProps } from "../component/dataProps";
import { Button } from "../component/button/Button";

export const Invite = () => {
  return (
    <div className="bg-outline min-h-screen flex  justify-center ">
      <Container>
        <div className="relative w-full gap-20 flex flex-col">
          <div className="fixed bg-primary w-full z-10 p-4 text-center shadow-sm">
            <p className="font-dancing text-4xl text-secondary">J & A</p>
          </div>
          <div className="pt-14 relative ">
            <div className="">
              <img className="w-full h-full object-cover" src={bgImg} alt="" />
            </div>
            <div className="absolute pt-12 top-0 bg-[#00000053]  text-white w-full h-full gap-3 flex flex-col items-center justify-center ">
              <h2 className="font-caveat text-2xl">THE WEDDING</h2>
              <p className="font-dancing text-4xl">Olajide & Alice </p>
            </div>
          </div>

          <div className="w-[90%] mx-auto rounded-xl p-6 text-white bg-gradient-to-b from-tertiary to-secondary ">
  <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-satisfy tracking-wide">
      Wedding Invitation
    </h1>

    <p className="text-xl font-satisfy leading-relaxed">
      The family of <strong>Elder Ologunagba Ade and Deaconess D.K. Ologunagba</strong>,<br />
      together with the family of <strong> Late Mr. Abidakun and Mrs. E.A. Abidakun</strong>,<br />
      joyfully request the honour of your presence<br />
      at the wedding celebration of their beloved children:
    </p>

    <h2 className="text-3xl font-satisfy mt-2">Ologunagba Olajide <br />& <br /> Abidakun Alice</h2>

    <p className="text-xl font-satisfy leading-relaxed">
      as they unite in holy matrimony.<br />
      Join us as we celebrate love, faith, and<br />
      the beginning of a beautiful journey together.
    </p>
  </div>
</div>


          <div className="w-[80%] mx-auto relative">
            <div className="absolute top-[-40px] left-[16%]">
              <img src={flowerImg} alt="" />
            </div>
            <div className="bg-primary w-full h-96 p-4 shadow-xl ">
              <div className="border-[1px] p-2 border-secondary flex flex-col items-center justify-center gap-6 w-full  h-full ">
                <div className="flex flex-col items-center justify-center ">
                  <Icon type="weddingring" />
                  <p className="text-3xl  text-secondary font-satisfy">
                    Engagement
                  </p>
                </div>

                <div className="space-y-1">
                  {venueProps.map((data, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-secondary font-mono text-lg tracking-tighter"
                    >
                      <div className="p-[2px]">
                        <Icon type={data.icon} />
                      </div>
                      <p className="leading-4.5">{data.content}</p>
                    </div>
                  ))}
                </div>

                <Button text="OPEN MAP" />
              </div>
            </div>
          </div>
          <div className="w-[80%] mx-auto relative">
            <div className="absolute top-[-40px] left-[16%]">
              <img src={flowerImg} alt="" />
            </div>
            <div className="bg-primary w-full h-96 p-4 shadow-xl ">
              <div className="border-[1px] p-2 border-secondary flex flex-col items-center justify-center gap-6 w-full  h-full ">
                <div className="flex flex-col items-center justify-center ">
                  <Icon type="weddingring" />
                  <p className="text-3xl  text-secondary font-satisfy">
                    Reception
                  </p>
                </div>
                <div className="space-y-1">
                  {venueProps.map((data, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-secondary font-mono text-lg tracking-tighter"
                    >
                      <div className="p-[2px]">
                        <Icon type={data.icon} />
                      </div>
                      <p className="leading-4.5">{data.content}</p>
                    </div>
                  ))}
                </div>
                <Button text="OPEN MAP" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
