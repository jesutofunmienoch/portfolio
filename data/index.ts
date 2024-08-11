export const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "i'm highly flexible with time zones, ensuring seamless communication and collaboration regardless of your location",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  export const projects = [
    {
      id: 1,
      title: "AI Saas Website Using Next.JS",
      des: "Transform your photos and unleash creativity with IMGRA. Powered by Next.js, our AI-driven platform offers intuitive editing tools and dynamic image generation for stunning results with ease.",
      img: "/easaas.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "IMGRA",
      url: "https://imgra.vercel.app/" // Add the URL for project 1 here
    },

    {
      id: 4,
      title: "Calculator",
      des: "LiveDocs lets you effortlessly invite users to view or edit documents in real-time. With seamless collaboration and intuitive access controls, manage your documents efficiently and securely, whether you're working solo or with a team.",
      img: "/calculator.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "CALCULATOR",
      url: "https://enochagramclaculator.vercel.app/" // Add the URL for project 4 here
    },
    {
      id: 4,
      title: "Collaborative Livedocs",
      des: "LiveDocs lets you effortlessly invite users to view or edit documents in real-time. With seamless collaboration and intuitive access controls, manage your documents efficiently and securely, whether you're working solo or with a team.",
      img: "/ealivedocs.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "LIVEDOCS",
      url: "https://my-newdocs-live-app.vercel.app/" // Add the URL for project 4 here
    },
  ];
  
  
  export const testimonials = [
    {
      quote:
        "Working with Enoch was a game-changer for our project. Their expertise in Next.js and Tailwind CSS brought our vision to life with unmatched speed and precision. Their dedication to user experience shines through every interaction",
      name: "Mrs Adeola",
      title: "Works at Wirefibre limited",
    },
    {
      quote:
        "Impressed doesn't even begin to cover it! Enoch's mastery of Aceternity UI transformed our platform into something truly exceptional. Their attention to detail and commitment to quality are evident in every line of code.",
      name: "John Daniel",
      title: "Developer",
    },
    {
      quote:
        "Thanks to Enoch, our website not only looks stunning but performs flawlessly. Their expertise in Next.js and Aceternity UI ensured our users have an intuitive and seamless experience. We couldn't be happier with the results!",
      name: "David",
      title: "Website Developer",
    },
    {
      quote:
        "Collaborating with Enoch was a dream. Their knowledge of modern web technologies like Next.js and Tailwind CSS is second to none. They took our project from concept to reality, exceeding our expectations at every turn.",
      name: "Jesutofunmi",
      title: "Journalist",
    },
   
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  export const contactCard = [
    {
      id: 1,
      title: "Email",
      desc: "Let get into business deal, contact me through email",
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: "Facebook",
      desc: "Let chat",
      className: "md:col-span-2",
    },
    {
      id: 3,
      title: "Whatsapp",
      desc: "Let's Chat",
      className: "md:col-span-2", 
    },
  ];
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/jesutofunmienoch"
    },
    {
      id: 2,
      img: "/twit.svg",
      url: "https://x.com/"
    },
    {
      id: 3,
      img: "/link.svg",
      url: "https://www.linkedin.com/in/enoch-agram-8592bb250/"
    },
  ];
  