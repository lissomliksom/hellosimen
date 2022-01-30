const Contact = () => {
  return(
    <footer id="#contact">
      <div className="container px-5 py-6 mx-auto my-12">
        <h3 className="text-4xl">contact</h3>
        <div className="flex items-center py-6 prose prose-zinc">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Simen@lesekloden.no</span>
        </div>
      </div>
    </footer>
  )
}

export default Contact