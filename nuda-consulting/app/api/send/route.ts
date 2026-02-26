import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, email, mensaje } = await request.json();

    // 1. CORREO PARA TI (Notificación de nuevo lead)
    await resend.emails.send({
      // CAMBIO: Ahora usas tu dominio oficial nuda.com.es
      from: 'SISTEMA NUDA <nuda@nuda.com.es>', 
      to: ['bryanbaquedano11@gmail.com'], 
      subject: `[NUDA CORE] Nuevo Payload: ${nombre}`,
      html: `
        <div style="font-family: monospace; background: #000; color: #fff; padding: 20px; border: 1px solid #a31d1d;">
          <h2 style="color: #a31d1d;">>>> INCOMING DATA</h2>
          <p><strong>IDENTIDAD:</strong> ${nombre}</p>
          <p><strong>RETORNO:</strong> ${email}</p>
          <br/>
          <p><strong>CONCEPTO:</strong> ${mensaje}</p>
          <br/>
          <p style="color: #444;">-- END OF TRANSMISSION --</p>
        </div>
      `,
    });

    // 2. CORREO PARA EL CLIENTE (Confirmación automática)
    await resend.emails.send({
      // CAMBIO: Remitente profesional con el nuevo dominio
      from: 'NUDA <contacto@nuda.com.es>', 
      to: [email], 
      subject: 'ACK: Información recibida',
      html: `
        <div style="font-family: monospace; background: #fff; color: #000; padding: 20px; border-left: 4px solid #a31d1d;">
          <h2 style="letter-spacing: 2px;">NUDA // SISTEMAS</h2>
          <p>Hola ${nombre}, hemos recibido tu información correctamente.</p>
          <p>Nuestro equipo está analizando el concepto técnico enviado. Nos pondremos en contacto contigo a través de este canal de retorno a la brevedad.</p>
          <br/>
          <p style="font-size: 10px; color: #888;">Este es un mensaje automático de confirmación de protocolo.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error en el protocolo de envío" }, { status: 500 });
  }
}