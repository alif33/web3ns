"use client"
import React, { useState } from "react"
import FaqItem from "./FaqItem"

type FaqItem = {
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    question: `What sets 3NS.AI apart from other AI trading platforms?`,
    answer: `
      <p>3NS.AI is pioneering a new paradigm in AI-powered trading, setting itself apart from existing platforms in several significant ways:</p>
      <p>The Web3 Advantage: We're not simply layering AI onto traditional finance. 3NS.AI seamlessly weaves your Web3 name (.eth, .crypto, etc.) into the fabric of the platform.  This unique identity becomes the foundation for your evolving AI agent and unlocks untapped potential within decentralized markets.</p>
      <p>Agent Intelligence Pools (AIPs):  The heart of our platform lies in AIPs – specialized hubs where AI agents collaborate, share knowledge, and access premium tools and datasets.  This fosters innovation at a speed impossible in traditional siloed systems.</p>
      <p>Democratization of HFT:  3NS.AI lowers the traditionally high barriers to entry in AI-driven High-Frequency Trading.  Individuals and smaller players can now access the tools and insights to compete in this dynamic landscape.</p>
      <p>Economic Empowerment:  We're not just about maximizing your trading profits.  3NS.AI introduces new revenue streams for developers to monetize their AI models, data providers to get rewarded for valuable contributions, and users who actively participate in AIP governance.</p>
      <p>AI for the People, Built by the People:  Our commitment to decentralization and community-driven development means 3NS.AI will constantly evolve in ways that truly benefit its users.</p>
      <p>We believe these core innovations make 3NS.AI the future of AI-powered trading – a future where cutting-edge technology, collaboration, and financial opportunity converge.</p>
    `
  },
  {
    question: `What types of assets and markets does 3NS.AI support?`,
    answer: `
      <p>3NS.AI aims to provide a comprehensive suite of tools and access to a diverse range of assets and markets, with a strong initial focus on the opportunities within the decentralized crypto landscape. Here's a breakdown:</p>
      <p>Currently Supported:</p>
      <p>Cryptocurrencies:  Major cryptocurrencies across various blockchains (Bitcoin, Ethereum, etc.)  as well as a curated selection of smaller-cap coins with potential for volatility and arbitrage opportunities.</p>
      <p>DeFi:  Access to liquidity pools, yield farming protocols, and decentralized exchanges (DEXs) for sophisticated AI-driven strategies tailored to DeFi.</p>
      <p>NFTs (Limited): Initial tools for NFT market analysis, potentially focusing on floor price trends, emerging collections, and sentiment-based signals.</p>
      <p>Planned Expansion:</p>
      <p>Traditional Assets (via Integration): We're exploring partnerships to allow AI agents to trade stocks, forex, and other traditional assets alongside crypto, providing a unified platform for broader market strategies.</p>
      <p>Derivatives: Futures, options, and other derivative products will be integrated as the platform matures, unlocking even more sophisticated trading techniques for AI agents.</p>
      <p>Data-Driven Additions:  We'll closely monitor the evolving crypto and traditional finance landscape,  prioritizing the integration of new asset classes and markets where our AI agents can potentially identify unique edges.</p>
      <p>Important Note:  The availability of specific assets or markets might evolve over time based on regulatory considerations, platform development, and community feedback.</p>
    `
  },
  {
    question: `How does 3NS.AI safeguard user assets and data?`,
    answer: `
      <p>We understand that security is paramount, especially when dealing with financial assets and potentially sensitive trading strategies.  3NS.AI employs a multi-layered approach to protect our users:</p>
      <p>User Empowerment:  We prioritize non-custodial solutions whenever possible. This means you retain direct control over your assets and private keys. AIP interactions and platform features are often facilitated through smart contracts and secure API connections with exchanges.</p>
      <p>Data Protection:  Sensitive user data is encrypted both in transit and at rest. We adhere to strict data privacy practices and will outline these transparently in our Privacy Policy.</p>
      <p>Smart Contract Audits:  Core components of 3NS.AI, especially those handling financial interactions, undergo rigorous audits by independent security firms to minimize vulnerabilities.</p>
      <p>Intrusion Detection & Prevention: Our systems actively monitor for unusual activity, suspicious patterns, or attempted exploits. Response protocols are in place to mitigate and contain potential threats.</p>
      <p>Zero-Knowledge Proofs (ZKP): Where applicable, ZKPs allow for computation and validation on encrypted data.  This protects agent strategies within AIPs while maintaining essential collaboration and knowledge sharing functionality.</p>
      <p>Transparency & Updates:  We'll provide clear information about our security measures and will be transparent in the case of any security incidents, including remediation steps.</p>
      <p>Continuous Vigilance: Security is an ongoing process. Our dedicated security team regularly reviews best practices, stays ahead of emerging threats, and collaborates with the broader security community.</p>
      <p>Important Note: Even with robust security measures, no platform is completely invulnerable. We encourage users to practice good security hygiene and take advantage of optional platform security features like two-factor authentication.</p>
    `
  },
  {
    question: `How can I connect with other 3NS.AI users?`,
    answer: `
      <p>3NS.AI isn't just about technology – it's about fostering a thriving community of traders, AI developers, and enthusiasts.  Here's how you can connect and collaborate with others</p>
      <p>Agent Intelligence Pools (AIPs):  AIPs often have integrated discussion forums or chat channels dedicated to the specific strategies, data, and opportunities within that pool. This is where you can learn from experts, share insights, and potentially find collaborators.</p>
      <p>Main Platform Forum:  3NS.AI will have a central forum or message board for broader discussions about platform development, general trading strategies, and AI theory as it applies to the markets.</p>
      <p>Social Media: Our official channels on platforms like [List your primary platforms – Discord, Telegram, Twitter, etc.] are hubs for announcements, real-time conversations, and a way to interact directly with both the team and other users.</p>
      <p>Community-Driven Events: We'll host regular webinars, AMAs ("Ask Me Anything" sessions), and potentially even online AI trading competitions to foster knowledge exchange and a sense of community.</p>
      <p>The Power of Collaboration</p>
      <p>We believe the true potential of 3NS.AI is unlocked through the collective knowledge and experience of its users.  Connect, share, and learn alongside a community driven to push the boundaries of AI-powered trading</p>
    `
  },
  {
    question: `How does 3NS.AI incorporate user feedback into its development?`,
    answer: `
      <p>3NS.AI is committed to being a platform built by the community for the community.  Your feedback plays a critical role in shaping the platform's evolution. Here's how we ensure your voice is heard:</p>
      <p>Dedicated Feedback Channels: We'll have easily accessible channels for submitting feature requests, reporting issues, and sharing your overall thoughts about the  platform.  These might include:</p>
      <p>On-platform suggestion box</p>
      <p>Specific forum categories</p>
      <p>Regular user surveys</p>
      <p>Governance Participation:  Our decentralized governance models often involve AIPs having a say in their own development roadmap.   3Token holders might be able to directly propose and vote on changes broader to the platform as a whole.</p>
      <p>Community Representatives: We'll identify active, engaged community members to act as liaisons, ensuring your feedback reaches the development team and informs decision-making.</p>
      <p>Transparency & Roadmaps:  We'll share development roadmaps that incorporate community feedback. You'll see how your suggestions are considered, prioritized, and potentially implemented.</p>
      <p>Iterative Approach: 3NS.AI is designed to continuously evolve. User feedback is an essential fuel that drives this ongoing improvement.</p>
      <p>Your Voice Matters</p>
      <p>We're not just building a platform; we're building a partnership with our users.  Be active, share your ideas, and let's shape the future of AI-powered trading together</p>
    `
  },
  {
    question: `Do I need extensive financial or programming knowledge to use 3NS.AI?`,
    answer: `
      <p>3NS.AI is designed to be accessible to users with varying levels of experience.  While some features cater to advanced traders and AI developers, we offer pathways for those new to both finance and AI to find their footing. Here's why:</p>
      <p>Guided Onboarding:  We'll provide clear onboarding tutorials that cover the basics of connecting your Web3 wallet, obtaining 3Tokens, and navigating the platform's core functions.</p>
      <p>Tiered AIPs:  Some Agent Intelligence Pools might specialize in beginner-friendly strategies, pre-built AI agent templates, and a greater focus on education alongside trading tools.</p>
      <p>Marketplace Resources:  Our marketplace will likely feature resources like analysis modules, strategy guides, and even external courses provided by both the 3NS.AI team and the broader community.</p>
      <p>Evolving with You:  As your knowledge and confidence grow, you can gradually explore the platform's more advanced features, customize your AI agents, and potentially even contribute back to the community by sharing your own insights and creations.</p>
      <p>Supportive Community:  Our forums and social channels are spaces where you can ask questions, learn from others at various stages of their journey, and find support as you grow your trading skills.</p>
      <p>We're Committed to Accessibility</p>
      <p>The world of AI-powered trading shouldn't be limited to a select few. 3NS.AI strives to create an environment where those new to the field can learn, experiment, and ultimately succeed alongside seasoned veterans.</p>
    `
  },
  {
    question: `Are there educational resources available on the platform?`,
    answer: `
      <p>Absolutely! 3NS.AI recognizes that knowledge is power, especially in the dynamic world of AI trading. We provide a variety of resources to support your learning journey:</p>
      <p>In-Platform Guides & Tutorials:  Our platform will integrate context-sensitive tutorials, explaining concepts where they are most relevant – from basic market terminology to advanced AI agent customization.</p>
      <p>Knowledge Base:  A comprehensive knowledge base will offer articles, explainers, and step-by-step walkthroughs covering platform features, AIP concepts, and general trading strategies.</p>
      <p>Dedicated "Academy" Section (Potential):  We might offer a structured "3NS.AI Academy" with curated content ranging from beginner level to more in-depth explorations of AI techniques specific to trading.</p>
      <p>Community-Created Content:  We encourage experienced users and AIPs to create and share their own tutorials, strategy breakdowns, and market analysis examples.</p>
      <p>External Partnerships: We may partner with established educational resources in the cryptocurrency and AI space to provide even more learning possibilities to our users.</p>
      <p>A Focus on Understanding</p>
      <p>3NS.AI isn't just about giving you tools; it's about empowering you to use those tools effectively.  Our educational resources aim to demystify complex concepts and help you develop a solid foundation for successful AI-driven trading.</p>
    `
  },
  {
    question: `Beyond the trading itself, what kind of community features does 3NS.AI offer?`,
    answer: `
      <p>3NS.AI is more than just a place to deploy AI agents; it's a vibrant hub for collaboration, knowledge exchange, and building relationships within the AI and crypto trading space. Here's how we foster community beyond the trade:</p>
      <p>AIP Discussions: Agent Intelligence Pools often have integrated forums or dedicated chat channels.  These become hotspots for discussing market trends, refining strategies specific to the AIP's focus, and learning from other members.</p>
      <p>Platform-Wide Forum:  Engage in broader discussions about AI development, macroeconomic factors affecting the markets, or even lighthearted banter about the unpredictable world of trading.</p>
      <p>Social Engagement:  Our presence on platforms like Discord, Twitter, and Telegram prioritize real-time interaction.  Connect with developers, share memes, and get a pulse on the community's sentimen</p>
      <p>News & Insights Curation:  We might aggregate relevant crypto and AI-related news, research reports, and insightful social media threads directly within the platform, creating a space for informed discussion.</p>
      <p>Events & Competitions:  Regular webinars, AMAs ("Ask Me Anything" sessions with experts), and perhaps even AI trading competitions foster a sense of camaraderie and incentivize knowledge sharing.</p>
      <p>Reputation Systems (Potential):  Constructive participation, creating valuable content, and helping others might earn you reputation points, unlocking perks or increasing your influence within AIPs.</p>
      <p>The Power of Connection</p>
      <p>We believe some of the greatest breakthroughs will occur at the intersection of individual traders, brilliant AI developers, and a supportive, engaged community. 3NS.AI provides the spaces and tools to make those connections happen.</p>
    `
  }
];

const FaqSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<number>(faqData.length)

  const handleToggle = (n: number)=>{
    console.log(n);
    
    isOpen===n? setIsOpen(faqData.length): setIsOpen(n)
  }

  return (
    <section
      id="faq"
      className="bg-white flex flex-col items-center justify-center min-h-screen"
    >
      <div className="container p-4 sm:p-24">
        <div className="w-full">
          <h1 className="text-3xl md:text-5xl text-center font-bold text-[#494949] drop-shadow-md mb-12">
            Frequently Asked Questions
          </h1>
          {faqData.map((item, index) => <FaqItem
              key={index}
              index={index}
              isOpen={isOpen}
              handleToggle={handleToggle}
              size={faqData.length}
              question={item.question}
              answer={item.answer}
          />)}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
