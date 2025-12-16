import React, { useState } from "react";
import BottomNav from "./NavBar/BottomNav";
import TopNav from "./NavBar/TopNav";
import { MessageSquare} from "lucide-react";
import { Phone } from "lucide-react";
import { Plus } from "lucide-react";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addContact = () => {
    if (!formData.name || !formData.phone) return;

    setContacts([...contacts, formData]);
    setFormData({ name: "", phone: "" });
    setShowForm(false);
  };

  return (
  <div>
      <TopNav pageName="Emergency Contacts" />
      {/* <h1 className="text-xl font-bold mb-4">Emergency Contacts</h1> */}

    <div className="h-screen bg-[#F9F8F6] text-black px-4 pt-10">
      {/* EMPTY STATE */}
      {contacts.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-24 text-black">
          <p>No emergency contacts added</p>
          <button onClick={() => setShowForm(true)} className="mt-4 bg-[#1f1e1e] px-6 py-3 rounded-full text-white font-semibold active:scale-95">
            + Add Contact
          </button>
        </div>
      )}

      {/* CONTACT LIST */}
      <div className="space-y-3">
        {contacts.map((contact, index) => (
          <div key={index} className="flex justify-between items-center border-2 border-gray-400 p-4 rounded-xl">
            <div>
              <h2 className="text-2xl font-bold">{contact.name}</h2>
              <p className="text-xl text-[#1f1e1e]">{contact.phone}</p>
            </div>

            <div className="flex space-x-2">
              <a href={`tel:${contact.phone}`} className="border-2 border-gray-200 px-4 py-4 rounded-full font-semibold">
                <Phone size={30} />
              </a>

              <a href={`sms:${contact.phone}`} className="border-2 border-gray-200 px-4 py-4 rounded-full font-semibold">
              <MessageSquare size={30} />
            </a>
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING ADD BUTTON */}
      {contacts.length > 0 && (
        <button onClick={() => setShowForm(true)} className="fixed bottom-20 right-5 bg-red-600 w-14 h-14 rounded-full text-2xl text-white font-bold flex items-center justify-center shadow-lg active:scale-95">
          <Plus size={40} />
        </button>
      )}

      {/* ADD CONTACT MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center px-5">
          <div className="bg-[#00000080] w-full p-5 rounded-2xl">
            <h2 className="text-xl text-white text-center font-semibold mb-3">Add Contact</h2>

            <input type="text" name="name" placeholder="Contact name" value={formData.name} onChange={handleChange} className="w-full text-white mb-3 bg-transparent border-b-4 border-gray-600 placeholder:text-white text-xl text-start focus:border-blue-500 outline-none py-2" />

            <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} className="w-full text-white mb-5 bg-transparent border-b-4 border-gray-600 placeholder:text-white text-xl text-start focus:border-blue-500 outline-none py-2" />

            <div className="flex justify-between">
              <button onClick={() => setShowForm(false)} className="bg-red-600 px-6 py-2 rounded-lg font-semibold text-gray-100">
                Cancel
              </button>

              <button onClick={addContact} className="bg-green-600 px-6 py-2 rounded-lg font-semibold">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>

    <BottomNav />
  </div>
  );
};


export default Contacts;
