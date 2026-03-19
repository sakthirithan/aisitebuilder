import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { Project } from "../types"


const Projects = () => {
  const { projectId } = useParams()
  const navigate = useNavigate()
  
  const [ projects, setProjects ] = useState<Project | null>(null)
  const [ loading, setLoading ] = useState(true)
  const [ isGenerating, setIsGenerating ] = useState(true)
  const [ device, setDevice ] = useState<'phone' | 'tablet' | 'desktop'>("desktop")

  return (
    <div>
      <h1>Projects</h1>
    </div>
  )
}

export default Projects