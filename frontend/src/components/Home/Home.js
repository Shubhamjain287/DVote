import React from 'react'
import "./Home.css"
import image1 from "./img/voting-process.svg";
import image2 from "./img/voting-process-mobile.svg";
import image3 from "./img/transparency-icon.svg";
import image4 from "./img/integrity-icon.svg";
import image5 from "./img/go-online.svg";

const Home = () => {
  return (
    <>
    <header style={{
        backgroundColor: "white"
    }}>
        <div id="header-text">
                <h1 class="section-title">Voting that can’t be compromised.</h1>
                <p> Online voting platform D-Vote </p>
        </div>
        <img src={image1} alt='Image' width="100%" id="voting-process" />
        <img src={image2} alt='Image' width="100%" id="voting-process-mobile" />
    </header>

    <section id="why-zeus" style={{
        backgroundColor: "white"
    }}>
      <div id="why-zeus-title">
        <h1 class="section-title">Voting with D-Vote</h1>
      </div>
      <div id="transparency-text">
        <h2>Transparency.</h2>
        <h3>Built-in.</h3>
        <p>D-Vote is the online voting platform.<br/>
        This guarantees that anyone can verify its Voting through BlockChain.</p>
      </div>
      <div id="transparency-icon">
        <img src={image3} alt='Image' class="why-zeus-icon" />
      </div>
      <div id="integrity-row"></div>
      <div id="integrity-text"><br/>
        <h2>Integrity.</h2>
        <h3>Built-in.</h3>
        <p>You don’t even have to trust the administrators or the Voting trustees... 
        <br />D-Vote unique design safeguards the integrity of the elections on all levels.</p>
      </div>
      <div id="integrity-icon">
        <img src={image4} alt='Image' class="why-zeus-icon" />
      </div>
    </section>

    <section id="go-online">
      <div id="go-online-text">
        <h1>Features of D-Vote</h1>
        <div id="easy-fast">
          <h2>Easy & Fast</h2>
          <p>So much easier, both for the organization and the voters. Faster voting, faster results.</p>
        </div>
        <div id="increase-participation">
          <h2>Increase Participation</h2>
          <p>Include the remote and the disabled, as everyone can vote from anywhere.</p>
        </div>
        <div id="reduce-cost">
          <h2>Reduce Costs</h2>
          <p>Drastically lower production and administration costs for the organization. Zero cost for the voters.</p>
        </div>
      </div>
      <img src={image5} alt="Image" width="70%" id="go-online-img" />
    </section>

    <footer>
      <p>Copyright D-Vote 2024. All right Reserved by D-Vote</p>
    </footer>
    </>
  )
}

export default Home;