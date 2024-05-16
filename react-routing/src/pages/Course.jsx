import React from 'react'
import { useParams } from 'react-router-dom'
const Course = () => {
  const params = useParams()
  return (
    <div>
      This is {params.coursename} course
    </div>
  )
}

export default Course
