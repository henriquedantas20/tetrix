import Card, { CardAvatar, CardInfo, CardText, CardTitle } from "../../shared/components/Card/Card";
import { Container } from "../../shared/components/Container/Container";
import S from './styles'
import background from '../../assets/img/background-1.png'
import logo from '../../assets/img/logo.png'
import logoWhite from '../../assets/img/logo-2.png'
import guyBg from '../../assets/img/guy-bg.png'
import phoneApp from '../../assets/img/phone-app.png'
import section2bg2 from '../../assets/img/section-2-bg-1.png'
import section2bg1 from '../../assets/img/section-2-bg-2.png'
import cards from '../../assets/img/cards.png'
import section4bg from '../../assets/img/section-4-bg.png'
import section4img1 from '../../assets/img/section-4-img-1.png'
import section4img2 from '../../assets/img/section-4-img-2.png'
import section4card1 from '../../assets/img/section-4-card-1.png'
import section4card2 from '../../assets/img/section-4-card-2.png'
import partners from '../../assets/img/partners.png'
import iconAdd from '../../assets/img/icon-add.png'
import iconPerson from '../../assets/img/icon-person.png'
import iconCard from '../../assets/img/icon-card.png'
import mobileStores from '../../assets/img/mobile-stores.png'
import whatsapp from '../../assets/img/whatsapp.png'
import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import messenger from '../../assets/img/messenger.png'
import newsletter from '../../assets/img/newsletter.png'
import Carousel from "../../shared/components/Carousel/Carousel";

const Home = () => {
    const isMobile = window.innerWidth <= 768
    return (
        <Container>
            <img style={{ position: 'absolute', left: isMobile ? -10 : 0, top: isMobile ? 0 : -40, zIndex: 1, width: isMobile ? "200%" : "unset", height: isMobile ? "525px" : "unset" }} src={background} />
            {!isMobile && <img style={{ position: 'absolute', left: 0, top: -40, zIndex: 1 }} src={guyBg} />}
            <S.Header style={{ zIndex: 2 }}>
                <S.Logo src={logo} />
                <S.Nav>
                    <S.NavLabel color="#fff">Nossa solução</S.NavLabel>
                    <S.NavLabel>Quem somos</S.NavLabel>

                    <S.Button>Meu Tetrix</S.Button>
                </S.Nav>
            </S.Header>
            <S.Section>                
                <S.SectionTitle color="#ffffff" maxWidth="900px">O Tetrix tem os benefícios flexíveis que sua empresa precisa provar.</S.SectionTitle>
                <S.SectionDescription color="#ffffff" maxWidth="535px">Descubra o controle e praticidade que o RH precisa e a liberdadede benefícios que o seu colaborador quer, tudo isso com custo zero para a sua empresa.</S.SectionDescription>
                <S.SectionButton variant="secondary">Quero conhecer</S.SectionButton>
            </S.Section>
            <S.Section minHeight="1040px" marginBottom={isMobile ? "50px" : "0"} marginTop={isMobile ? "100px" : "600px"} position="right">
                {!isMobile && <img style={{ position: 'absolute', top: '-15%', scale: '1.2', zIndex: 2 }} src={phoneApp} />}
                <img style={{ position: 'absolute', top: '-40%', right: '-260px' }} src={section2bg1} />
                {!isMobile && <img style={{ position: 'absolute', top: '-25%', left: '50px' }} src={section2bg2} />}
                <S.SectionTitle maxWidth="600px" color="#EB007F">Vapt vupt.<br />Todos os benefícios em um único lugar.</S.SectionTitle>                                
                <S.SectionDescription maxWidth="600px">De forma simples, o RH pode concentrar todos os benefícios previstos na legislação em um único cartão bandeira Visa.</S.SectionDescription>
                <S.SectionButton variant="primary" mr={isMobile ? "0" : "400px"}>Vem cá saber mais</S.SectionButton>                                
            </S.Section>
            <S.Section minHeight="1300px">
                {!isMobile && <img style={{ position: 'absolute', top: '-31%', left: '290px' }} src={cards} />}
                <Card width="500px" height="400px">
                    <CardTitle color="#EB007F">O custo é zero</CardTitle>
                    <CardInfo maxWidth="440px">Você só paga o saldo de benefícios dos seus colaboradores. A emissão e envio do cartão, pode deixar com a gente. Com a caju é zero preju.</CardInfo>
                </Card>
                <Card gradient position={isMobile ? "unset" : "absolute"} top="470px" left="150px" width="500px" height="400px">
                    <CardTitle color="#FFFFFF">Gradient Card</CardTitle>
                    <CardInfo color="#FFFFFF" maxWidth="440px">Você só paga o saldo de benefícios dos seus colaboradores. A emissão e envio do cartão, pode deixar com a gente. Com a caju é zero preju.</CardInfo>
                </Card>
                <Card position={isMobile ? "unset" : "absolute"} top="750px" left="850px" width="500px" height="480px">
                    <CardTitle color="#EB007F">Atendimento<br />que dá gosto!</CardTitle>
                    <CardInfo maxWidth="440px">Como o cartão físico ou aplicativo é possível acessar todos os seus benefícios no Caju. E se surgir alguma dúvida? Pode chamar a gente, mesmo nos finais de semana e feriados.</CardInfo>
                </Card>
                <Card position={isMobile ? "unset" : "absolute"} top="1000px" left="220px" width="450px" height="400px">
                    <CardTitle color="#EB007F">Tudo nos<br />conformes</CardTitle>
                    <CardInfo maxWidth="440px">A Caju é legalmente legal, nossos benefícios seguem os padrões de benefícios da CLT tim tim por tim tim.</CardInfo>
                </Card>
            </S.Section>
            <S.Section minHeight="1300px">
                <img style={{ position: 'absolute', top: isMobile ? '50px' : '0', left: isMobile ? '0' : '-160px', zIndex: 1, width: isMobile ? "100%" : "unset", height: isMobile ? "300px" : "unset" }} src={section4bg} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: 'center', flexDirection: isMobile ? "column" : "row", width: '100%' }}>
                    <img src={section4img2} style={{ zIndex: 2, marginTop: isMobile ? '100px' : '200px', scale: isMobile ? '1' : '0.95', width: isMobile ? "90%": "unset", marginRight: isMobile ? '50px' : '-140px' }} />
                    <img src={section4img1} style={{ zIndex: 2, marginTop: isMobile ? '100px' : '200px', scale: isMobile ? '1' : '0.95', width: isMobile ? "90%": "unset", marginRight: isMobile ? '52px' : 'unset' }} />
                    <img src={section4card1} style={{ zIndex: 2, position: 'absolute', left: isMobile ? '5%' : '-465px', top: isMobile ? '220px' : '300px', width: isMobile ? "90%": "unset", scale: isMobile ? '3' : 'unset' }} />
                    <img src={section4card2} style={{ zIndex: 2, position: 'absolute', left: isMobile ? '5%' : '325px', top: isMobile ? '575px' : '300px', width: isMobile ? "90%": "unset", scale: isMobile ? '2.7' : 'unset' }} />
                </div>
                <S.SectionButton mt="100px" ml={isMobile ? "0" : "48%"} justify="center" variant="dark">Conhecer mais</S.SectionButton>
            </S.Section>
            <S.Section minHeight="1000px">
                <S.SectionTitle size="65px" ml={isMobile ? "0" :  "30%"} color="#EB007F">Quem desfruta do Tetrix</S.SectionTitle>
                <S.SectionSubtitle ml={isMobile ? "0" : "39%"} mt="25px">Tem um pedacinho guardado pra você</S.SectionSubtitle>
                <img src={partners} style={{ marginLeft: isMobile ? "0" : "11%", marginTop: isMobile ? '50px' : '100px', width: isMobile ? "100%" : "unset" }} />
                <S.SectionTitle textAlign="center" ml={isMobile ? "0" : "27%"} mt="200px" color="#EB007F">O Tetrix não para<br />de crescer e gerar frutos</S.SectionTitle>
            </S.Section>
            <S.Section minHeight="1500px" mobileMinHeight="1700px">
                <img style={{ position: 'absolute', top: '0', left: '-160px', zIndex: 1 }} src={section4bg} />
                <div style={{ width: isMobile ? "100%": "110%", display: 'flex', marginLeft: '0px', flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "center" : "unset" }}>
                    <Card noPadding alignItems="center" position="relative" mt="90px" noShadow width={isMobile ? "90%" : "33%"} height="400px" mr={isMobile ? "0" : "50px"}>
                        <CardAvatar>
                            <img src={iconPerson} />
                        </CardAvatar>
                        <CardText weight="100" size="40px" mt="20px">Mais de</CardText>
                        <CardText weight="700" size="60px" color="#EB007F">400.000</CardText>
                        <CardText weight="100" size="40px">usuários ao redor<br/>do Brasil.</CardText>
                    </Card>
                    <Card noPadding alignItems="center" position="relative" mt="90px" noShadow width="33%" height="400px" mr="50px">
                        <CardAvatar>
                            <img src={iconCard} />
                        </CardAvatar>
                        <CardText weight="100" size="40px" mt="20px">Cartão Visa<br />aceito em</CardText>
                        <CardText weight="700" size="60px" color="#EB007F">2 milhões</CardText>
                        <CardText weight="100" size="40px">de lugares diferentes.</CardText>
                    </Card>
                    <Card noPadding alignItems="center" position="relative" mt="90px" noShadow width="33%" height="400px" mr="50px">
                        <CardAvatar>
                            <img src={iconAdd} />
                        </CardAvatar>
                        <CardText weight="100" size="40px" mt="20px">Acima de</CardText>
                        <CardText weight="700" size="60px" color="#EB007F">90 pts NPS</CardText>
                        <CardText weight="100" size="40px">segundo os<br />clientes Tetrix.</CardText>
                    </Card>
                </div>
                <S.SectionTitle size="65px" mt="200px" color="#FFFFFF">Quem prova, aprova e adora</S.SectionTitle>
                <Carousel>
                    <Card isCarousel shadowColor="#777" minWidth="350px" height="450px" mr="40px">
                        <CardInfo></CardInfo>
                    </Card>                
                    <Card isCarousel shadowColor="#777" minWidth="350px" height="450px" mr="40px">
                        <CardInfo></CardInfo>
                    </Card>                
                    <Card isCarousel shadowColor="#777" minWidth="350px" height="450px" mr="40px">
                        <CardInfo></CardInfo>
                    </Card>                
                    <Card isCarousel shadowColor="#777" minWidth="350px" height="450px" mr="40px">
                        <CardInfo></CardInfo>
                    </Card>                
                    <Card isCarousel shadowColor="#777" minWidth="350px" height="450px" mr="40px">
                        <CardInfo></CardInfo>
                    </Card>                                                                                                          
                </Carousel>
            </S.Section>
            <S.Footer>  
                <img src={logoWhite} style={{ position: isMobile ? 'unset' : 'absolute', left: "430px", top: "100px", scale: isMobile ? '0.3' : 'unset', marginLeft: isMobile ? '-160px' : '0' }} />              
                <S.FooterColumn>
                    <S.FooterColumnTitle>Lorem ipsum</S.FooterColumnTitle>
                    <S.FooterColumnText>Dolor sit amet</S.FooterColumnText>
                    <S.FooterColumnText>Consectetur</S.FooterColumnText>
                    <S.FooterColumnText>Adispiscing</S.FooterColumnText>
                </S.FooterColumn>
                <S.FooterColumn>
                    <S.FooterColumnTitle>Lobortis</S.FooterColumnTitle>
                    <S.FooterColumnText>Feugiat vivamus</S.FooterColumnText>
                    <S.FooterColumnText>Commodo</S.FooterColumnText>
                    <S.FooterColumnText>Sollicitudin</S.FooterColumnText>
                    <S.FooterColumnText>Vulputate</S.FooterColumnText>
                    <S.FooterColumnText>Feugiat</S.FooterColumnText>
                </S.FooterColumn>
                <S.FooterColumn>
                    <S.FooterColumnTitle>Lorem ipsum</S.FooterColumnTitle>
                    <S.FooterColumnText>Dolor sit amet</S.FooterColumnText>
                    <S.FooterColumnText>Consectetur</S.FooterColumnText>
                    <S.FooterColumnText>Adispiscing</S.FooterColumnText>
                </S.FooterColumn>
                <S.FooterColumn>
                <S.FooterColumnTitle>Lobortis</S.FooterColumnTitle>
                    <S.FooterColumnText>Feugiat vivamus</S.FooterColumnText>
                    <S.FooterColumnText>Commodo</S.FooterColumnText>
                    <S.FooterColumnText>Sollicitudin</S.FooterColumnText>
                    <S.FooterColumnText>Vulputate</S.FooterColumnText>
                    <S.FooterColumnText>Feugiat</S.FooterColumnText>
                </S.FooterColumn>
                <S.FooterColumn>
                    <S.FooterColumnTitle>Lorem ipsum</S.FooterColumnTitle>
                    <img src={mobileStores} style={{ scale: isMobile ? "0.8" : "1" }} />
                    <div style={{ display: "flex", marginTop: isMobile ? 20 : 50, marginBottom: isMobile ? "50px" : "0" }}>
                        <img src={instagram} style={{ marginRight: 10 }} />
                        <img src={facebook} style={{ marginRight: 10 }} />
                        <img src={messenger} style={{ marginRight: 10 }} />
                        <img src={whatsapp} style={{ marginRight: 10 }} />
                    </div>
                </S.FooterColumn>
                <S.FooterNewsletter>
                    <img src={newsletter} style={{ position: 'absolute', top: '18%', right: '70px' }} />
                    <div style={{ width: "85%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <input placeholder="Insira seu e-mail" />
                        <S.SectionButton mt="30px" variant="dark">Enviar</S.SectionButton>
                    </div>
                </S.FooterNewsletter>
            </S.Footer>
        </Container>
    );
}

export default Home