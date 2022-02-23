import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Maktoom Ahmed - Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section style={{
          marginBottom: '20px'
        }} id='contact'>
          <h1 id='main_heading'>Mac Ahmed</h1>
          <h2 id='sub_heading'>Software Developer</h2>
        </section>
        <hr/>

        <section style={{
          marginTop: '20px'
        }} id="skills">
          <h3 className='sectionHeading'>programming languages i somewhat know:</h3>
          <p className='subitem'>Some of these aren't even considered programming languages</p>
          <p>Java, Python, Javascript, MySQL, C, HTML, CSS, MATLAB, Perl</p>

          <h3 className='sectionHeading'>frameworks, libraries, and others:</h3>
          <p>jQuery, NodeJS, ExpressJS, MongoDB, Angular, VueJS, React, Laravel, WordPress, Spark, Git, Linux, LeafletJS, Hadoop, Spring Boot</p>
        </section>

        <section style={{
          marginTop: '20px'
        }} id="education">
          <h3 className='sectionHeading'>currently studying:</h3>
          <p>Master of Information Technology, Univesity of Western Australia. Graduating in 2022</p>

          <h3 className='sectionHeading'>already done:</h3>
          <p>Bachelor of Science: Computer Science and Data Science, University of Western Australia. Graduated in 2019</p>
        </section>
      </main>

      <style jsx>{`
        #main_heading {
          color: #B58900;
          font-weight: 700;
          font-size: 40px;
        }

        #sub_heading {
          color: #6C71C4;
          padding: 0;
          margin-top: -20px;
          font-weight: 200;
          font-size: 30px;
        }

        #skills {
          margin: 10px;
        }

        #education {
          margin: 10px;
        }

        .subitem {
          font-size: 8px;
          color: #93A1A1;
          margin-top: -5px;
          font-weight: 100;
        }

        .sectionHeading {
          color: #CB4B16;
          font-size: 25px;
        }
      `}</style>
    </div>
  )
}
