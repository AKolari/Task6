import Container from '../components/Container';

const About = () => {
    return (<Container>
        <div className="flex h-96 rounded-xl p-8 md:p-0 bg-slate-700 border-2 border-zinc-900">
          <div className="flex flex-col relative justify-center items-center w-full ">
            <h1 className='text-8xl italic flex m-14  text-center text-white'>WHO ARE WE?</h1>
            
            
            <p className='text-s w-3/4 flex  italic absolute m-4 bottom-0 text-center text-white '>Blamazon Books is a spinoff of the immensly popular corporation Blamazon, which 
            still has no affiliation with any other corporate entity who may have a similar sounding name. In 2022, we launched Blamazon to huge success, and are now launching
            Blamazon Books!! It's like Blamazon. But with books!!!!!! Everybody loves books! Therefore, everybody loves Blamazon Books. Why? Because it's Blamazon, but with books!!
            </p>
            

            </div>
        </div>
    </Container>)
}

export default About;