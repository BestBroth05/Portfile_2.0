/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {fa9} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";
import reat from "../assets/img/react.svg";
export function ItemsCategorias({item}) {
  let arrayTech = [];
  let dataTech = item.descripcion;
  let objTech = dataTech.split(',');
  for (let i = 0; i < objTech.length; i++) {
    var element = objTech[i];
    arrayTech.push({id: i, tech:element});
  }
  console.log(arrayTech);
  return (
      
      <div className="category__card">
        <FontAwesomeIcon alt="category image" className="category__img" icon={item.img} size= '6x' style={{color: "#624da3",}} />

        <h3 className="category__title">{item.title}</h3>
       
        <div >
        {item.descripcion.split(",").map((data) => {
            return (<div className="category__description">{data}
            </div>);
          })}
          
        </div>
        <FontAwesomeIcon alt="category star" className="category__star" icon={item.img} size='2xl' style={{color: "#624da3",}} />
      </div>
    
  );
}

