import React from 'react';
import { Button, ButtonToolbar, FlexboxGrid, Grid, Row, Col } from 'rsuite';
import TopLevelNav from '@/components/TopLevelNav';
import Link from '@/components/Link';
import Logo from '@/components/Logo';
import ReactLogo from '@/components/ReactLogo';
import AppContext from '@/components/AppContext';
import Head from '@/components/Head';

import PageToolbar from '@/components/PageToolbar';

function HomePage() {
  const [running, setRuning] = React.useState(false);
  const { messages } = React.useContext(AppContext);

  React.useEffect(() => {
    setTimeout(() => {
      setRuning(true);
    }, 1700);
  }, []);

  return (
    <>
      <Head title={messages?.common?.home} description={messages?.common?.resume}></Head>
      <Grid className="page-home">
        <TopLevelNav hideToggle />
        <PageToolbar />
        <Row>
          <FlexboxGrid align="middle" className="banner">
            <FlexboxGrid.Item as={Col} colspan={24} md={12}>
              <section className="section">
                <h1 className="title">CenSuite</h1>
                <p className="sub-title"> {messages?.common?.resume}</p>
                <ButtonToolbar className="primary-toolbar">
                  <Button size="lg" appearance="primary" as={Link} href={'/guide/introduction'}>
                    {messages?.common?.gettingStarted}
                  </Button>
                  <Button
                    size="lg"
                    appearance="ghost"
                    as={Link}
                    style={{ marginLeft: 10 }}
                    href={'/components/overview'}
                  >
                    {messages?.common?.components}
                  </Button>
                </ButtonToolbar>
              </section>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item className="logo-react-suite-wrapper" as={Col} colspan={24} md={12}>
              <div className="section logo-react-suite">
                <Logo width={120} height={138} />
                <ReactLogo running={running} />
              </div>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Row>
        <Row>
          <div className="footerbar">
            <a href="http://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
              沪 ICP 备 12011101 号 - 10
            </a>
          </div>
        </Row>
      </Grid>
    </>
  );
}

export default HomePage;
