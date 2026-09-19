import { Fragment } from 'react'

/** Renders a headline that is deliberately broken over several lines: `first<br />second`. */
export default function Lines({ lines }: { lines: readonly string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  )
}
