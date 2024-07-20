import React from 'react'

export default function Footer(props) {
  return (
    <div>
        <div className="mt-3">
        <p className="text-secondary text-center">
            copyright ©
            {props.year} {props.name}  {props.studentId}
        </p>
        </div>
    </div>
  )
}
