import { 
    SiReact, 
    SiNodedotjs, 
    SiJavascript, 
    SiPython, 
    SiMongodb, 
    SiMysql,
    SiHtml5,
    SiCss3,
    SiGit,
    SiRedis
  } from 'react-icons/si'
  
  const skills = [
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'Python', icon: SiPython, color: 'text-blue-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-400' },
    { name: 'Git', icon: SiGit, color: 'text-red-500' },
    { name: 'Redis' , icon: SiRedis, color: 'text-red-500' }
  ]
  
  export default function Skills() {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <skill.icon className={`text-5xl ${skill.color} mb-2`} />
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  