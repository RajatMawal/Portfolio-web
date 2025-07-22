import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import { toast } from "react-toastify";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

   const onSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  formData.append("access_key", "12b98cfa-9958-4499-8d1d-42fb9e465df8");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();
  console.log("first")


    if (result.success) {
      toast.success("Message sent successfully!");
      form.reset();
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Submission Error:", error);
    toast.error("Something went wrong. Please check your network.");
  }
};


  return (
    <div className="w-full min-h-screen bg-black px-6 pt-30 pb-10 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-blue-600/20 via-pink-400/10 to-transparent rounded-full blur-3xl opacity-30 z-0 "></div>

      <div className="relative flex justify-center items-center mb-16 z-10">
        <h1 className="text-[14vw] md:text-[10vw] font-extrabold opacity-10 absolute tracking-wider select-none">
          CONTACT
        </h1>
        <p className="text-5xl md:text-6xl font-bold z-10">CONTACT</p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 relative z-10">
        {/* Left Side */}
        <div className="flex-1 space-y-6" data-aos="fade-right">
          <iframe
            src="https://lottie.host/embed/c954ee92-e54d-4cc9-9a6d-376f5a42bafa/CersHpbDFQ.lottie"
            className="h-[37vh]"
          ></iframe>
          <h2 className="text-4xl font-semibold">Let’s work together</h2>
          <p className="text-gray-400">
            Feel free to reach out for collaborations or even just a chat 👋
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <MdOutlineMail className="text-2xl" />
              <a
                href="mailto:rajat333mawal@gmail.com"
                className="text-blue-400 underline"
              >
                rajat333mawal@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <CiLinkedin className="text-2xl" />
              <a
                href="https://www.linkedin.com/in/rajat-mawal-513745246"
                className="text-blue-400 underline"
              >
                Rajat Mawal
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="flex-1 space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-md transform hover:scale-[1.02] hover:shadow-blue-600/40 transition-all duration-500"
          data-aos="fade-left"
          onSubmit={onSubmit}
        
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-black/40 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-black/40 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-black/40 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="message"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
