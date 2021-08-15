import React from "react";
import styled from "styled-components";


const MarginForm = styled.div`
    border-radius: 20px;
    @media (min-width:768px){
        margin-top: 10%;
        
    }
    
`
const Formulario = styled.form`
    @media (min-width:768px){
        padding: 0.5rem 2rem 2rem 2rem;
        
    }
`
export const FormSold = ({handleSell,setNombre,setTelefono,setEmail,nombre,telefono,email}) => {

	return (
		<MarginForm className="col-lg-7 shadow-lg p-3  bg-body ">
			<div>
				<Formulario onSubmit={handleSell}>
					<h3>Informacion de compra</h3>
					<div>
						<label htmlFor="nombre" className="fs-5">
							Nombre y apellido
						</label>
						<input
							value={nombre}
							onChange={(e) => {
								setNombre(e.target.value);
							}}
							type="text"
							required
							className="form-control"
							
						/>
					</div>
					<div>
						<label htmlFor="telefono" className="fs-5">
							Telefono
						</label>
						<input
							value={telefono}
							onChange={(e) => {
								setTelefono(e.target.value);
							}}
							type="text"
							required
							className="form-control"
							
						/>
					</div>
					<div>
						<label htmlFor="email" className="fs-5">
							Correo Electrónico:
						</label>
						<input
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type="email"
							required
							className="form-control"
							
						/>
					</div>
					<div className="d-flex mt-3">
						<button type="submit" className="btn btn-primary btn-lg d-block w-100 ">
							Pagar 
						</button>
					</div>
				</Formulario>
			</div>
		</MarginForm>
	);
};

