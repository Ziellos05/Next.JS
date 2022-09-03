import Link from 'next/link'

export default function Projects({userName}) {
  return (
    <>
        <h1>Here the title</h1>
      <p>Here are the projects of {userName}!</p>
      <nav>
          <Link href="/">
          <a>
            Go home!
          </a>
          </Link>
        </nav>

      <style>{`

    p {
        color: blue
    }

`}</style>
    </>
  );
}

Projects.getInitialProps = async () => {
    return fetch('http://localhost:3000/api/hello')
    .then(res => res.json())
    .then(response => {
        const {userName} = response
        return {userName}
    })
}