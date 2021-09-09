import React, { Component } from 'react';
import '../css/BookingUpdate.css';
import axios from "axios";
import { Redirect } from 'react-router-dom';

class BookingUpdate extends Component {
    state = {
        fullname: localStorage.getItem('fullname'),
        from: "",
        to: "",
        date: "",
        time: "",
        distance: "",
        price: "",
        id: this.props.match.params.id,
        chklogin: false,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        alert(this.state.id)
        axios.get("http://localhost:90/booking/single/" + this.state.id)
            .then((response) => {
                this.setState({
                    // id:response.data._id,
                    fullname: response.data.fullname,
                    from: response.data.from,
                    to: response.data.to,
                    date: response.data.date,
                    time: response.data.time,
                    distance: response.data.distance,
                    price: response.data.price,
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    updateData = (e) => {
        console.log(this.state)
        e.preventDefault();
        axios.put('http://localhost:90/update/booking', this.state, this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    chklogin: true
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        if (this.state.chklogin === true) {
            //redirect to dashboard
            return <Redirect to='/' />

        }

        return (
            <div className="container-fluid">
                <section id="bookingupdate">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <form className="updatebook ">
                            <h1>Booking Update</h1>
                            <div className="form2 col-md-6">
                                <div class="form-group">
                                    <label >Pick Up</label>
                                    <select name="from" class="form-control" type="select" placeholder="from..." id="from" value={this.state.from} onChange={this.changeHandler}>
                                        <option disabled="" selected="">Dillibazar</option>
                                        <option >Pashupatinath</option>
                                        <option >Boudha</option>
                                        <option >Swayambhunath</option>
                                        <option >Thamel</option>
                                        <option >Kapan</option>
                                        <option >Patan</option>
                                        <option >Lokanthali</option>
                                        <option >Putalisadak</option>
                                        <option >Suryabhinayak</option>
                                        <option >Kupandole</option>
                                        <option >Samakhushi</option>
                                        <option >Tokha</option>
                                        <option >Koteshwor</option>
                                        <option >Jadibuti</option>
                                        <option >New Baneshwor</option>
                                        <option >Mid-Baneshwor</option>
                                        <option>Sadobato</option>
                                        <option >Maitighar</option>
                                        <option >Tripureshwor</option>
                                        <option >Sundhara</option>
                                        <option >Maitidevi</option>
                                        <option >Mid-Baneshwor</option>
                                        <option>Sinamangal</option>
                                        <option >Gausala</option>
                                        <option >Chabahil</option>
                                        <option >Tinkune</option>
                                        <option >Kausaltar</option>
                                        <option>Gatthaghar</option>
                                        <option >Thimi</option>
                                        <option>Balkumari</option>
                                        <option >Gwarko</option>
                                        <option >Ekantakuna</option>
                                        <option >Jamel</option>
                                        <option >Dhobighat</option>
                                        <option>Jawalakhel</option>
                                        <option >Lagankhel</option>
                                        <option>Pulchowk</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label >Drop Up</label>
                                    <select name="to" class="form-control" type="select" placeholder="to..." id="to" value={this.state.to} onChange={this.changeHandler}>
                                        <option disabled="" selected="">Lokanthali</option>
                                        <option >Pashupatinath</option>
                                        <option >Boudha</option>
                                        <option >Swayambhunath</option>
                                        <option >Thamel</option>
                                        <option >Kapan</option>
                                        <option >Patan</option>
                                        <option >Dillibazar</option>
                                        <option >Putalisadak</option>
                                        <option >Suryabhinayak</option>
                                        <option >Kupandole</option>
                                        <option >Samakhushi</option>
                                        <option >Tokha</option>
                                        <option >Koteshwor</option>
                                        <option >Jadibuti</option>
                                        <option >New Baneshwor</option>
                                        <option >Mid-Baneshwor</option>
                                        <option>Sadobato</option>
                                        <option >Maitighar</option>
                                        <option >Tripureshwor</option>
                                        <option >Sundhara</option>
                                        <option >Maitidevi</option>
                                        <option >Mid-Baneshwor</option>
                                        <option>Sinamangal</option>
                                        <option >Gausala</option>
                                        <option >Chabahil</option>
                                        <option >Tinkune</option>
                                        <option >Kausaltar</option>
                                        <option>Gatthaghar</option>
                                        <option >Thimi</option>
                                        <option>Balkumari</option>
                                        <option >Gwarko</option>
                                        <option >Ekantakuna</option>
                                        <option >Jamel</option>
                                        <option >Dhobighat</option>
                                        <option>Jawalakhel</option>
                                        <option >Lagankhel</option>
                                        <option>Pulchowk</option>
                                    </select>
                                </div>

                                <div class="form-group">

                                    <label for="date">Date</label>
                                    <input type="date" class="form-control" id="date" name="date" value={this.state.date} onChange={this.changeHandler} />
                                </div>

                                <div class="form-group">
                                    <label for="time">Time</label>
                                    <input class="form-control" type="time" id="time" name="time" min="09:00" max="18:00" value={this.state.time} onChange={this.changeHandler} />
                                </div>
                                <button style={{ background: "black", color: "white", marginTop: "10px" }} onClick={this.updateData}>Update</button>
                            </div>
                            <div className="col-md-3">
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default BookingUpdate