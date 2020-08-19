import React from 'react';
import { Button } from 'react-bootstrap';

const Filters = (props) => {
    return (
        <div className="container filters">
            <div className="row">
                <div className="col-md-12">
                    <h6>Filters</h6>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                    <h6>Launch Year</h6>
                    <hr />
               </div>
               <div className="col-md-12 button-group">
                   <span><Button variant="success" size="sm" className="btn">2006</Button></span>
                   <span><Button variant="success" size="sm">2007</Button></span>
               </div>
               <div className="col-md-12 button-group">
                   <span><Button variant="success" size="sm" className="btn">2008</Button></span>
                   <span><Button variant="success" size="sm">2009</Button></span>
               </div>
               <div className="col-md-12 button-group">
                   <span><Button variant="success" size="sm" className="btn">2010</Button></span>
                   <span><Button variant="success" size="sm">2011</Button></span>
               </div>
               <div className="col-md-12 button-group">
                   <span><Button variant="success" size="sm" className="btn">2012</Button></span>
                   <span><Button variant="success" size="sm">2013</Button></span>
               </div>
               <div className="col-md-12 button-group">
                   <span><Button variant="success" size="sm" className="btn">2014</Button></span>
                   <span><Button variant="success" size="sm">2015</Button></span>
               </div>
               <div className="col-md-12 button-group">
                   <span><Button variant="success" size="sm" className="btn">2016</Button></span>
                   <span><Button variant="success" size="sm">2017</Button></span>
               </div>
               <div className="col-md-12 button-group">
                   <span><Button variant="success" size="sm" className="btn">2018</Button></span>
                   <span><Button variant="success" size="sm">2019</Button></span>
               </div>
               <div className="col-md-12 button-group">
                   <span><Button variant="success" size="sm" className="btn">2020</Button></span>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                    <h6>Successful Launch</h6>
                    <hr />
               </div>
               <div className="col-md-12 button-group">
                   <span><Button variant="success" size="sm" className="btn">True</Button></span>
                   <span><Button variant="success" size="sm">False</Button></span>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                    <h6>Successful Landing</h6>
                    <hr />
               </div>
               <div className="col-md-12 button-group">
                   <span><Button variant="success" size="sm" className="btn">True</Button></span>
                   <span><Button variant="success" size="sm">False</Button></span>
               </div>
            </div>
        </div>
    )
}

export default Filters;
