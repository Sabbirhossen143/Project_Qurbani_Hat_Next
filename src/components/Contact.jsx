"use client";
import { toast } from "react-toastify";


const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // simple validation asdd sa
    if (!name || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Thanks! Message sent successfully.", {
  position: "top-center",
  autoClose: 2200,
  hideProgressBar: true,
  pauseOnHover: false,
  style: {
  width: window.innerWidth < 768 ? "fit-content" : "360px",
  maxWidth: "90%",
  fontSize: window.innerWidth < 768 ? "12px" : "13px",
  borderRadius: "12px",
  padding: "10px 12px",
  marginTop: window.innerWidth < 768 ? "110px" : "80px",
  textAlign: "center",
  whiteSpace: "nowrap",
  gap: "6px",
},
});

    form.reset(); 
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-gray-800">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        
        {/* LEFT: Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Get in Touch
          </h3>

          <p className="text-gray-600 mb-6">
            Have questions about Qurbani animals? Feel free to contact us.
            We are here to help you anytime.
          </p>

          <div className="space-y-3 text-sm text-gray-700">
            <div className="space-y-3 text-sm text-gray-700">

  <div className="flex items-center gap-2">
    <img src="/images/map.png" className="w-6 h-6" />
    <p>Chattogram, Bangladesh.</p>
  </div>

  <div className="flex items-center gap-2">
    <img src="/images/mail.png" className="w-6 h-6" />
    <p>bdqurbanihat@gmail.com</p>
  </div>

  <div className="flex items-center gap-2">
    <img src="/images/telephone.png" className="w-6 h-6" />
    <p>+880 1234-567890</p>
  </div>

</div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <form 
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 p-4 md:p-5 rounded-2xl shadow-lg space-y-3 md:space-y-4 max-w-md w-full">
          
          <input
  name="name"
  type="text"
  placeholder="Your Name"
  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg
focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
/>

<input
  name="email"
  type="email"
  placeholder="Your Email"
  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg
focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
/>

<textarea
  name="message"
  rows="4"
  placeholder="Your Message"
  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border rounded-lg
focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 md:py-3 text-sm md:text-base rounded-lg font-medium 
hover:bg-green-700 transition duration-200 active:scale-95"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;