import React, { useState, Component } from 'react';
import '../css/booking.css';
import axios from 'axios';

class booking extends Component {
    state = {
        email: localStorage.getItem('email'),
        contact: localStorage.getItem('contact'),
        from: "",
        to: "",
        date: "",
        time: "",
        distance: "1",
        price: "1",
        id: localStorage.getItem('id'),
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    ChangeItem = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //img handler
    calculatePrice() {
        const price_per_km = this.state.distance;
        const count = 40;
        const total_price = parseInt(price_per_km * count);
        // console.log(total_price)
        return total_price
    }

    // disable past dates
    disablePastDate() {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    SendItems = (e) => {
        //preventDefault== By default refresh hunxa so, blank nahoss vannah refresh nahoss vannah
        e.preventDefault();
        var price1 = 0;
        price1 = this.calculatePrice()
        this.state.price = price1
        console.log(this.state.price)

        const data = {
            id: this.state.id,
            email: this.state.email,
            contact: this.state.contact,
            from: this.state.from,
            to: this.state.to,
            date: this.state.date,
            time: this.state.time,
            distance: this.state.distance,
            price: this.state.price

        }

        axios.post("http://localhost:90/customer/booking", data, this.state.config)
            .then((response) => {
                console.log(response)
                alert(response.data.message)
                window.location.reload(true);
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    render() {
        return (
            <div>
                <section id="hero2">
                    <div class="hero2-container" data-aos="fade-up">
                        <h1>Welcome to Booking Page</h1>
                        <h2></h2>
                    </div>
                </section>

                <section id="booking" class="booking">
                    <div class="section-center">
                        <div class="container">
                            <div class="row">
                                <div class="booking-form">
                                    <div class="form-header">
                                        <h1>Make Advanced Booking</h1>
                                    </div>
                                    <form>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label style={{ color: "white" }}>Pick Up</label>
                                                    <select name="from" class="form-control" type="select" placeholder="from..." id="from" value={this.state.from} onChange={this.ChangeItem}>
                                                        <option disabled="" selected="Dillibazar">Dillibazar</option>
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
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label style={{ color: "white" }}>Drop Up</label>
                                                    <select name="to" class="form-control" type="select" placeholder="to..." id="to" value={this.state.to} onChange={this.ChangeItem}>
                                                        <option disabled="" selected="Lokanthali">Lokanthali</option>
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
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label style={{ color: "white" }} >Date</label>
                                                    <input class="form-control" type="date" min={this.disablePastDate()} placeholder="Date..." name="date" value={this.state.date} onChange={this.ChangeItem} required />
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label style={{ color: "white" }}>PickUp Time</label>
                                                    <input class="form-control" type="time" id="time" name="time" min="09:00" max="18:00" value={this.state.time} onChange={this.ChangeItem} required />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-btn">
                                            <button class="submit-btn" onClick={this.SendItems}>Book Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default booking;