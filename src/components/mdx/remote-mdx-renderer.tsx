import { mdxComponents } from './components'
import { MDXRemote } from 'next-mdx-remote/rsc'

type MDXRendererProps = {
  source: string
  components?: Record<string, React.ComponentType<any>>
}

export default function RemoteMDXRenderer({ source, components = mdxComponents }: MDXRendererProps) {
  return <MDXRemote source={source} components={components} />
}