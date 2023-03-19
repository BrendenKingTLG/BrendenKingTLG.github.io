import Head from 'next/head'
import { AiFillLinkedin } from 'react-icons/ai'
import { DiJsBadge, DiPython, DiJava, DiAws, DiMongodb} from "react-icons/di"
import { FcLinux } from "react-icons/fc"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Brenden King's Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/development.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Noto+Color+Emoji&display=swap" rel="stylesheet"></link>
      </Head>
      <main className=' min-h-screen bg-slate-50'>
      <section className='' >
          <nav className=' shadow-sm bg-slate-600' id='mainNav' >
            <ul className='flex justify-center my-5'>
              <li><a href="/" className='cursor-pointer'>Home</a></li>
              <li><p>|</p></li>
              <li><a href="/resume" className='cursor-pointer'>Resume</a></li>
              <li><p>|</p></li>
              <li><a href="/projects" className='cursor-pointer'>Projects</a></li>
            </ul>
          </nav>
      </section>
      <section className='px-6'>
          <section>
            <h2 className=' font-bold text-center text-5xl mb-4 pt-9'>
              Brenden King
            </h2>
            <h3 className='font-bold text-center text-xl'>Software Engineer, Developer and Designer</h3>
            <p className='text-center px-3 py-2 mx-30 leading-7'>
            My technical expertise includes proficiency in programming languages such as Java, Python, and JavaScript, as well as in-depth knowledge of database management systems, web development frameworks, and cloud computing platforms. I am also experienced in agile development methodologies, test-driven development, and continuous integration and delivery
            </p>
          </section>
          <section className=''>
            <h2 className='text-center font-bold text-xl m-5'>Tech Stack</h2>
            <div className='flex justify-between'>
              <img src="/java (1).svg" alt="java logo" id='java'/><img src="/aws.svg" alt="java logo"/><img src="/linux.svg" alt="java logo"/>
            </div>
            <div className='flex justify-between'>
            <img src="/js.svg" alt="java logo"/><img src="/mongodb.svg" alt="java logo"/><img src="/python (1).svg" id='python' alt="java logo"/>
            </div>
          </section>
          <section className=''>
            <h2 className=' text-center font-bold text-xl m-5'>Connect With Me</h2>
            <div className=' flex justify-center'>
            <a href="https://www.linkedin.com/in/brenden-king-swe/" target={'_blank'} rel={'noopener'}><img src="/linkedin.svg" alt="java logo" className='mx-4'/></a><a target={'_blank'} rel={'noopener'} href="https://github.com/BrendenKingTLG"><img src="/github.svg" alt="java logo" className='mx-4'/></a>
            </div>
          </section>
          <section className=''>
          </section>
        </section>
      </main>
    </>
  )
}
