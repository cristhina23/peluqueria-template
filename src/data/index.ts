import { Calendar, MessageSquare, HeartHandshake } from "lucide-react";
import { heroData } from "./hero";
import {
  Sparkles,
  Award,
  Heart,
  Shield,
} from "lucide-react";

export const contactData = {
  header: {
    badge: "Encuéntranos",
    title: "Visítanos o Escríbenos",
    subtitle:
      "Agenda tu cita, resuelve tus dudas o visítanos en nuestro salón en Lima.",
  },

  location: {
    address: "Av. Primavera 1234, 3er piso",
    district: "San Borja",
    city: "Lima, Perú",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.788035576211!2d-76.9970199!3d-12.0985407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c87e7b8b8b8b%3A0x123456789abcdef!2sSan%20Borja%2C%20Lima!5e0!3m2!1ses!2spe!4v1700000000000",
  },

  hours: [
    "Lunes a Viernes: 9:00 a.m. – 8:00 p.m.",
    "Sábados: 9:00 a.m. – 2:00 p.m.",
    "Domingos: Cerrado",
  ],

  phone: {
    label: "Teléfono",
    value: "+51 987 654 321",
    href: "tel:+51987654321",
    whatsapp: "51987654321",
  },

  email: {
    label: "Email",
    value: "hola@salonlima.pe",
    href: "mailto:hola@salonlima.pe",
  },

  social: {
    instagram: "#",
    facebook: "#",
  },
};


export const whatsappUrl = `https://wa.me/${heroData.cta.primary.phone}?text=${encodeURIComponent(
    heroData.cta.primary.message
  )}`;

  export const values = [
  {
    icon: Shield,
    title: "Diagnóstico profesional antes de cualquier servicio",
    description:
      "Analizamos tu tipo de cabello, historial químico y objetivo final antes de recomendarte cualquier tratamiento.",
  },
  {
    icon: Award,
    title: "Técnicas actualizadas y formación constante",
    description:
      "Nuestro equipo se capacita de forma continua para garantizar resultados seguros y actuales.",
  },
  {
    icon: Sparkles,
    title: "Resultados visibles y controlados",
    description:
      "Seguimos procesos definidos que protegen la salud de tu cabello y aseguran el resultado esperado.",
  },
  {
    icon: Heart,
    title: "Acompañamiento antes y después de tu cita",
    description:
      "Te guiamos para mantener tu resultado y resolver cualquier duda posterior al servicio.",
  },
];


export const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Agenda sin complicaciones",
    description:
      "Reserva tu cita fácilmente por WhatsApp. Confirmamos disponibilidad y te guiamos desde el primer contacto.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Evaluación experta",
    description:
      "Realizamos un diagnóstico profesional según tu tipo de cabello, historial químico y objetivo deseado.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Ejecución con técnica y cuidado",
    description:
      "Aplicamos el servicio con productos profesionales y procesos controlados para proteger la salud de tu cabello.",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Resultado que se siente y se ve",
    description:
      "Sales con un look que te representa y con recomendaciones claras para mantener tu resultado por más tiempo.",
  },
];

export const testimonials = [
  {
    name: "María Fernanda R.",
    role: "Clienta recurrente",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Desde la primera cita sentí que sabía exactamente lo que mi cabello necesitaba. El color quedó natural, saludable y tal como lo imaginé.",
    service: "Balayage personalizado",
  },
  {
    name: "Laura P.",
    role: "Servicio Novia",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "El acompañamiento fue increíble desde la prueba hasta el día del evento. Me sentí tranquila, segura y el resultado superó mis expectativas.",
    service: "Novia & eventos",
  },
  {
    name: "Carmen S.",
    role: "Clienta desde 2021",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "Venía con el cabello muy maltratado y me explicaron todo antes de empezar. Hoy está mucho más sano y manejable. Se nota el profesionalismo.",
    service: "Tratamiento de keratina",
  },
  {
    name: "Andrea L.",
    role: "Primera visita",
    image: "https://i.pravatar.cc/150?img=16",
    rating: 5,
    text: "Me asesoraron sin apurarme y respetaron exactamente lo que pedí. Es difícil encontrar un salón así. Definitivamente regreso.",
    service: "Corte + color",
  },
];


export const faqs = [
  {
    question: "¿Cuánto tiempo tarda el servicio?",
    answer:
      "El tiempo depende del tipo de servicio, pero normalmente el proceso completo toma entre 3 y 7 días hábiles. Siempre te indicamos los tiempos antes de comenzar.",
  },
  {
    question: "¿Qué incluye exactamente el servicio?",
    answer:
      "Incluye asesoría personalizada, ejecución profesional y soporte durante todo el proceso. No trabajamos con soluciones genéricas.",
  },
  {
    question: "¿Necesito tener algo listo antes de empezar?",
    answer:
      "No. Si ya tienes material lo usamos, y si no, te guiamos paso a paso para obtener todo lo necesario sin complicaciones.",
  },
  {
    question: "¿Qué pasa si no me gusta el resultado?",
    answer:
      "Trabajamos con revisiones para asegurarnos de que el resultado final cumpla tus expectativas antes de entregar.",
  },
  {
    question: "¿Cómo es el proceso de pago?",
    answer:
      "El pago se realiza de forma segura y te explicamos todas las opciones disponibles antes de comenzar el proyecto.",
  },
];


export const team = [
  {
    name: "Sofía Ramírez",
    role: "Fundadora & Colorista Experta",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specialty: "Balayage • Color Correctivo",
  },
  {
    name: "Elena Torres",
    role: "Estilista Senior",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specialty: "Corte • Styling Profesional",
  },
  {
    name: "Andrea Morales",
    role: "Especialista en Tratamientos",
    image:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specialty: "Keratina • Alisados",
  },
];