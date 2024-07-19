"use client";
import Image from "next/image";
import styled from "@emotion/styled";

interface LinkProps {
  disabled?: boolean;
}

const OverviewDiv = styled.div`
  background-color: #2d2d2d;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const Header = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Link = styled.a<LinkProps>`
  color: ${(props) => (props.disabled ? "gray" : "white")};
  text-decoration: none;
  padding: 15px 25px;
  border-radius: 5px;
  transition: background-color 0.3s;
  flex: 1;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${(props) => (props.disabled ? "initial" : "#333")};
  }
`;

const Divider = styled.div`
  height: 40px;
  width: 1px;
  background-color: #fff;
  margin: 0 10px;
`;

const MainDiv = styled.div`
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0;
  border-radius: 10px;
  margin-left: 20px;
  flex: 1; /* Allows MainDiv to take the remaining space */
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1a;
  padding: 50px;
  border-radius: 10px;
  width: 300px; /* Optional: Sets a fixed width for AboutMe */
`;

const Name = styled.h3`
  margin: 25px 0 25px 0;
`;
const PictureDiv = styled.div`
  margin: 10px;
  border-radius: 10px;
`;
const Line = styled.hr`
  width: 100%;
  border: 1px solid white;
  margin: 10px 0; /* Adjust spacing as needed */
`;

const AboutMeUnderline = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center; /* Aligns items in the center vertically */
`;

const MainContent = styled.div`
  padding: 50px;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const AboutMeTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #f0f0f0;
  text-align: center;
  margin-bottom: 10px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 50%;
    height: 2px;
    background-color: #f0f0f0;
    margin: 10px auto 0;
  }
`;

const AboutMeText = styled.p`
  padding: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: #d3d3d3;
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

const ContentContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  width: 33%;
  justify-content: space-between;
  gap: 20px;
  background-color: #333;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const TitleAndText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  justify-content: center; /* Ensures title is centered vertically */
`;

const Title = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: #d3d3d3;
  margin: 0 0 5px 0;
`;

const SmallText = styled.p`
  font-size: 14px;
  color: #d3d3d3;
  margin: 0;
`;
const Page = () => {
  return (
    <OverviewDiv>
      <AboutMe>
        <div>
          <Image src="/me.jpg" alt="Me" width={140} height={200} />
        </div>
        <Name>Helgi Tuan Helgason</Name>
        <Line />
        <AboutMeUnderline>
          <Image src="/email.svg" alt="Me" width={50} height={20} />
          <p>helgiftw@gmail.com</p>
        </AboutMeUnderline>
        <AboutMeUnderline>
          <Image src="/phone.svg" alt="Me" width={50} height={20} />
          <p>+354 7722236</p>
        </AboutMeUnderline>
        <AboutMeUnderline>
          <Image src="/birthday.svg" alt="Me" width={50} height={20} />
          <p>23/03/1995</p>
        </AboutMeUnderline>
      </AboutMe>
      <MainDiv>
        <Header>
          <Link href="/">Home</Link>
          <Divider />
          <Link disabled href="#portfolio">
            Portfolio
          </Link>
          <Divider />
          <Link disabled href="#project">
            Projects
          </Link>
        </Header>
        <MainContent>
          <AboutMeTitle>About Me</AboutMeTitle>
          <AboutMeText>
            Ég heiti Helgi Tuan og ég er nýskrifaður úr Háskólanum í Reykjavík
            með BS gráðu í Tölvunarfræði.
            <br /> Ég hef mikinn áhuga á því að vinna sem framendaforritari og
            tel mig hafa hæfileikana og ástríðuna sem þarf til að takast á vioð
            slíkt starf.
            <br /> Á námstíumanum mínum í HR öðlaðist ég bæði fræðilega þekkingu
            og hagnýta reynslu í forritun. <br />
            Ég hef góðan grunn í helstu forritunarmálum auk þess að hafa unnið
            með React, Next.js. Ég hef einnig unnið að fjölmörgum hópverkefnum
            þar sem ég hef lært mikilvægi teymisvinnu og samskipta.
            <br /> Eitt af því sem drífur mig áfram er löngun til að skapa
            notendavænar og hagnýtar veflausnir sem bæta upplifun notenda. Ég
            hef sterkan áhuga fyrir hönnun og notendaviðmótum og legg mikla
            áherslu á að kóði minn sé bæði skiljanlegur og viðhaldslegur.
          </AboutMeText>
          <ContentDiv>
            <ContentContainer>
              <Logo>
                <Image src="/webdev.svg" alt="Logo 1" width={50} height={50} />
              </Logo>
              <TitleAndText>
                <Title>Framendaforritari</Title>
                <SmallText>
                  Framúrskarandi notendaviðmot með góðum grunn Javascript, HTML
                  , CSS og reynslu í React, Nextjs og notendavænn og hagnýtum
                  veflausnum
                </SmallText>
              </TitleAndText>
            </ContentContainer>
            <ContentContainer>
              <Logo>
                <Image
                  src="/phonedev.svg"
                  alt="Logo 2"
                  width={50}
                  height={50}
                />
              </Logo>
              <TitleAndText>
                <Title>App Hönnuður</Title>
                <SmallText>
                  Framúrskarandi notendaviðmót með ágætan grunn í React Native
                </SmallText>
              </TitleAndText>
            </ContentContainer>
            <ContentContainer>
              <Logo>
                <Image
                  src="/webdesign.svg"
                  alt="Logo 2"
                  width={50}
                  height={50}
                />
              </Logo>
              <TitleAndText>
                <Title>UX/UI Hönnuður</Title>
                <SmallText>
                  Mikill áhugi á UX/UI með sterkum bakgrunn í Figma auk reynslu
                  af notendnarannsóknum og prófunum, lofast ég til að skapa
                  notendavænar og hagnýtar lausnir sem bæta upplifun notenda.
                </SmallText>
              </TitleAndText>
            </ContentContainer>
          </ContentDiv>
        </MainContent>
      </MainDiv>
    </OverviewDiv>
  );
};

export default Page;