import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-5 max-w-sm w-full">
        <h1 className="text-5xl font-bold text-gray-800 mb-1 text-left">Mac Ahmed</h1>
        <p className="text-2xl text-gray-600 mb-1 text-left">Software Engineer @ AWS</p>
        <p className="text-md text-gray-500 mb-1 mt-4 text-left">6+ years experience</p>
        <p className="text-md text-gray-500 mb-1 text-left">Java • AWS • Spring Boot</p>
        <p className="text-md text-gray-500 mb-4 text-left">Sydney, Australia</p>
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-end space-x-4 text-2xl text-gray-600">
            <a href="https://www.linkedin.com/in/macahmed-97/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedin /></a>
            <a href="https://github.com/MacAhmed" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800"><FaGithub /></a>
            <a href="mailto:me@maktoom.dev" className="hover:text-blue-600"><FaEnvelope /></a>
            <a href="tel:0470715508" className="hover:text-green-600"><FaPhone /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
