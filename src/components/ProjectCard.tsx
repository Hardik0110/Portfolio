// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import Image from "../assets/swordcrest.webp"
// import React from "react"

// interface Project {
//   id: number
//   title: string
//   description: string
//   imageUrl: string
// }

// interface ProjectCardProps {
//   project: Project
// }

// export default function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
//       <CardContent className="p-0">
//         <div className="relative h-48">
//           <Image
//             src={project.imageUrl}
//             alt={project.title}
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//       </CardContent>
//       <CardFooter className="flex flex-col items-start p-4">
//         <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//         <p className="text-muted-foreground">{project.description}</p>
//       </CardFooter>
//     </Card>
//   )
// }

