import React, { Component } from "react"
import $ from "jquery"
import { FaTh, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import "./App.scss"

const data = [
  {
    id: 1,
    title: () => (
			"Judul."
		),
    desc: () => (
			<div className="d-flex align-content-between flex-wrap">
				<div>
					<p>
						Komunikasi Pemasaran dalam Jaringan: Survei Pengaruh Iklan
						<em>Pop-up </em> “Semua Pasti Ada di Shopee” terhadap Perilaku
						Penghindaran Konsumen Generasi Pasca-milenial (Generasi Z) di Yogyakarta
					</p>
				</div>
				<div id="identitas" className="d-flex flex-row mt-5 ml-auto border"
					style={{
						backgroundColor: "rgba(255,255,255,0)"
					}}
				>
					<span className="text-left px-3 pt-3 pb-2">
						Primadika Dwijantara<br/>
						13/353210/SP/25962
					</span>
				</div>
			</div>
    ),
    img: require("./img/definition.jpg")
  },
  {
    id: 2,
		title: () => ("Latar belakang."),
    desc: () => (
      <div>
        <ul className="text-left">
          <li className="py-2">Ada apa dengan iklan <em>pop-up</em> "Semua pasti ada di Shopee"?</li>
          <li>Mengapa harus generasi Z yang ada di Yogyakarta?</li>
        </ul>
      </div>
    ),
    img: require("./img/latar-belakang.jpg")
  },
	{
    id: 3,
		title: () => ("Rumusan masalah."),
    desc: () => (
      <p>
        Sejauh mana iklan <em>pop-up</em> dengan tagline “Semua pasti ada di Shopee”
        dapat memengaruhi perilaku penghindaran konsumen generasi Z yang ada
        di Yogyakarta?
      </p>
    ),
    img: require("./img/puzzles.jpg")
  },
	{
    id: 4,
		title: () => ("Tujuan Penelitian."),
    desc: () => (
			<p className="text-justify">
				Penelitian ini bertujuan untuk mengukur pengaruh iklan pop-up dengan tagline
				“Semua pasti ada di Shopee” dalam memengaruhi keputusan konsumen generasi Z
				yang ada di Yogyakarta dalam menghindari iklan. Sekaligus mencari tahu determinan
				yang dapat memengaruhi perilaku penghindaran tersebut melalui sikap yang
				ditunjukkan terhadap iklan pop-up, norma yang dipersepsikan oleh pengguna, dan
				pandangan pengguna terhadap kendali perilaku (perceived behavioral control / PBC)
				dalam kaitannya dengan iklan pop-up “Semua pasti ada di Shopee.”
			</p>
    ),
    img: require("./img/target.jpeg")
  }
]

const CarouselItem = ({ id, title, desc, img, className }) => (
  <div id={`halaman${0+id}`} className={className} data-halaman={id}>
		<div className="d-block w-100 position-absolute"
			style={{
			backgroundImage: "radial-gradient(rgba(0,0,0,0), rgba(0,0,0,.5))",
			width: "100vw",
			height: "100vh"
		}}/>
		<div className="d-block w-100"
			style={{
			backgroundImage: `url(${img})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			width: "100vw",
			height: "100vh"
		}}/>
		<div className="carousel-caption mt-5 p-5 h-75 d-block">
			<h1 className="display-1 mb-3">{title()}</h1>
			<svg className="mb-3" viewBox="0 0 600 2"
				xmlns="http://www.w3.org/2000/svg">
				<line x1="1" y1="1" x2="599" y2="1" stroke="rgb(255,255,255,1)"
					stroke-linecap="round" />
			</svg>
			{desc()}
		</div>
  </div>
)

const pageAfter = (pages, direction) => {
	switch (direction.type) {
		case "prev":
			return pages.current===1 ? pages.length : pages.current - 1
		case "next":
			return pages.current===pages.length ? 1 : pages.current + 1
		default:
			return pages.current
	}
}

const CarouselControl = ({ direction, read, onClick }) => (
	<a className={`carousel-control-${direction}`} href="#carousel" role="button"
		data-slide={`${direction}`} onClick={onClick}
	>
		<span className="sr-only">{read}</span>
	</a>
)

const ThumbnailItem = ({ id, title, img, currentPage, onClickThumbnail }) => (
	<button className={`thumbnail-wrapper p-0 border-0 ${id===currentPage?"active":""}`}
		data-target="#carousel"
		data-slide-to={id}
		disabled={id===currentPage}
		style={{
			width: "25%",
			height: "33%"
		}}
		onClick={(e)=>{
			onClickThumbnail(e)
		}}
	>
		<div className="thumbnail-img d-flex align-content-center justify-content-center"
			style={{
				width: "100%",
				height: "100%",
				backgroundColor: "rgb(0,0,0)",
				backgroundImage: `url(${img})`,
				backgroundPosition: "center",
				backgroundSize: "cover"
			}}
		>
			<div className="thumbnail-text position-absolute p-3 text-left align-content-center justify-content-center w-100 h-100"
				style={{
					color: "rgba(255,255,255,1)",
					background: "rgba(0,0,0,.35)"
				}}
			>
				<span className="align-self-center">
					{title()}
				</span>
			</div>
		</div>
	</button>
)

const ThumbnailPresentation = ({ onClickClose, onClickThumbnail, currentPage }) => (
	<div id="thumbnailOverlay" className="">
		<div id="thumbnailHeader" className="px-4 py-3 border d-flex"
			style={{
				width: "100vw",
				height: "12.5vh"
			}}
		>
			<div>
				<h5>Halaman berapa tadi?</h5>
				<span>
					Klik untuk memilih halaman.
				</span>
			</div>
			<div className="ml-auto">
				<button id="closeThumbnail" className="border rounded-circle px-3 py-2 pb-1"
					onClick={onClickClose}
				>
					<MdClose />
				</button>
			</div>
		</div>
		<div id="thumbnailContainer"
			className="d-flex align-content-start flex-wrap p-4 position-relative m-0 carousel-indicators"
			style={{
				width: "100vw",
				height: "87.5vh",
				background: "rgba(0,0,0,.125)"
			}}
		>
			{
				data.map(i => (
					<ThumbnailItem id={i.id} title={i.title} img={i.img} currentPage={currentPage}
						onClickThumbnail={onClickThumbnail}
					/>
				))
			}
		</div>
	</div>
)

// helper
// const shuffle = (array) => {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }


let initialPage = 1

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			page: {
				current: initialPage,
				length: data.length,
			},
			whichPresentation: "carousel"
		}
		this.handleSlideController = this.handleSlideController.bind(this)
	}

	handleSlideController(e) {
		const direction = $(e.currentTarget).data("slide")
		const currentPage = pageAfter(this.state.page, {type: direction})
		this.setState({ page: { current: currentPage }})
	}

	componentDidMount() {
		$(document).on("keyup", (e) => {
			switch (e.which) {
				case 37:
				case 38:
					if ($("[data-slide='prev']").length > 0) {
						document.querySelector("[data-slide='prev']").click()
					}
					break
				case 39:
				case 40:
				case 13:
				case 32:
					if ($("[data-slide='next']").length > 0) {
						document.querySelector("[data-slide='next']").click()
					}
					break
				default:
					break
			}
			e.preventDefault()
		})
	}

	componentDidUpdate() {
		console.log(this.state)
		// go to page of selection
		data.map(i => {
			return i.id !== this.state.page.current ?
				$(`#halaman${i.id}`).removeClass("active")
				// console.log(`#halaman${i.id} tidak diklik`)
				:
				$(`#halaman${i.id}`).addClass("active")
				// console.log(document.querySelector(`#halaman${i.id}`))
		})

	}

  render() {
    return (
      <div>
				{
					this.state.whichPresentation === "thumbnail" ?
						<ThumbnailPresentation
							onClickClose = {() => {
								this.setState({ whichPresentation: "carousel" })
								console.log(this.state.page.current)
							}}
							onClickThumbnail={(e) => {
								const clickedThumbnailPage = $(e.currentTarget).data("slide-to")
								// set curent page state to clicked thumbnail
								this.setState({
									page: {
										current: clickedThumbnailPage
									}
								})
								// click close
								$("#closeThumbnail").click()
							}}
							currentPage={this.state.page.current}
						/>
					:
						<div id="carouselContainer" className="">
							<div id="pageIndicator"
								className="position-fixed rounded-circle p-1 m-3 text-center d-flex align-items-center"
								style={{ zIndex: "1000", width: "3.25rem", height: "3.25rem" }}
							>
								<span>
									<strong style={{ fontSize: "1.25rem" }}>
										{this.state.page.current<10?"0"+this.state.page.current:this.state.page.current}
									</strong>
									<small>
										/{data.length<10?"0"+data.length:data.length}
									</small>
								</span>
							</div>
							<div id="navigator"
								className="fixed-bottom ml-auto text-right p-1 m-3"
								style={{ zIndex: "1000", height: "3rem", fontSize: "1.25rem" }}
							>
								<button id="thumbnailBtn" className="rounded-circle px-2 pb-1 pt-0 ml-2"
									onClick={()=>{this.setState({ whichPresentation: "thumbnail" })}}
								>
									<FaTh />
								</button>
								<button id="prevBtn" className="rounded-circle px-2 pb-1 pt-0 ml-2 carousel-control-left"
									onClick={()=>{document.querySelector("[data-slide='prev']").click()}}
									disabled={this.state.page.current===1}
								>
									<FaChevronLeft />
								</button>
								<button id="nextBtn" className="rounded-circle px-2 pb-1 pt-0 ml-2"
									onClick={()=>{document.querySelector("[data-slide='next']").click()}}
									disabled={this.state.page.current===data.length}
								>
									<FaChevronRight />
								</button>
							</div>
			        <div id="carousel" className="carousel slide" data-interval="false">
								<div className="carousel-inner">
									{
										data.map(i => (
											<CarouselItem id={i.id} title={i.title} desc={i.desc} img={i.img}
												className={`carousel-item ${i.id===1?"active":""}`} />
										))
									}
								</div>
								{
									this.state.page.current===1 ?
										(
											<CarouselControl direction="next" read="Next"
												onClick={(e)=>{this.handleSlideController(e)}}
											/>
										)
									: this.state.page.current===data.length ?
										(
											<CarouselControl direction="prev" read="Previous"
												onClick={(e)=>{this.handleSlideController(e)}}
											/>
										)
									:
										[
											{
												direction: "prev",
												read: "Previous",
											},
											{
												direction: "next",
												read: "Next",
											},
										].map(i => (
											<CarouselControl direction={i.direction} read={i.read}
												onClick={(e)=>{this.handleSlideController(e)}}
											/>
										))
								}
							</div>
						</div>
				}
      </div>
    )
  }
}

export default App
