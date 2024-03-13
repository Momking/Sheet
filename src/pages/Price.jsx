import styled from "styled-components";
import Pricing from "../Components/Pricing";
import Navbar from "../Components/Navbar";

function Price() {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className="pricing-component">
          <Pricing
            data={[
              { text: "3 new project / month", value: true },
              { text: "Basic interaction", value: true },
              { text: "Assets library", value: false },
            ]}
            price={1000}
            duration="m"
            background="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
            shadow="#96e6a1"
            currency="₹"
            buttonContent="Get Started"
            subTitle="For Planned Projects"
            priceText="Bring your designs to the next level and export them."
            headerText="free"
          />
        </div>
        <div className="pricing-component">
          <Pricing
            data={[
              { text: "3 new project / month", value: true },
              { text: "Basic interaction", value: true },
              { text: "Assets library", value: true },
            ]}
            price={12000}
            duration="y"
            background="linear-gradient(to left, #ff0844 0%, #ffb199 100%);"
            shadow="#ffb199"
            currency="₹"
            buttonContent="Get Started"
            subTitle="For Prodessional Use"
            priceText="Enjoy limitless use with interactive export options."
            headerText="free"
          />
        </div>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f1ff;

  @media screen and (max-width: 970px) {
    flex-direction: column;
    height: 110rem;
    .pricing-component {
      margin: 2rem 0;
    }
  }
`;

export default Price;
