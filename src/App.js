import React, { Component } from "react"
import $ from "jquery"
import { FaTh, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import throttle from "lodash.throttle"
import "./App.scss"

const data = [
  {
    id: 0,
    title: () => (
			"Judul."
		),
    desc: () => (
			<div className="d-flex align-content-between flex-wrap">
				<div>
					<p>
						Komunikasi Pemasaran dalam Jaringan: Survei Pengaruh Iklan
						<em>Pop-up </em> “Semua Pasti Ada di Shopee” terhadap Perilaku
						Penghindaran Konsumen Generasi Z di Yogyakarta
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
    img: require("./img/gen-z.jpg")
  },
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  },
  {
    id: 4,
    title: () => (
      "Kerangka Teori."
    ),
    desc: () => (
      <ol className="text-left">
        <li>Mekanisme Pemasaran Online</li>
        <li>Penghindaran Iklan</li>
        <li>Model Penghindaran Iklan Cho & Cheon</li>
        <li>Memprediksi Perilaku Konsumen Menggunakan Teori Perilaku Terencana</li>
      </ol>
    ),
    img: require("./img/kerangka2.jpg")
  },
  {
    id: 5,
    title: () => (
      "Kerangka Konsep."
    ),
    desc: () => (
      <ol className="text-left">
        <li>Alasan (<em>perceived goal impediment</em>, <em>perceived ad clutter</em>, dan <em>prior negative experience</em>)</li>
        <li>Pertimbangan (<em>attitude toward behavior</em>, <em>subjective norm</em>, dan <em>perceived behavioral control</em>)</li>
        <li>Pengaruh terhadap niat (kognitif, afektif, dan perilaku)</li>
        <li>Niat berperilaku</li>
        <li>Perilaku Penghindaran (kognitif, afektif, perilaku, kebiasaan)</li>
      </ol>
    ),
    img: require("./img/concept.jpg")
  },
  {
    id: 6,
    title: () => (
      <small><strong>Metodologi Penelitian.</strong></small>
    ),
    desc: () => (
      <ol className="text-left">
        <li>Pendekatan Penelitian Kuantitatif</li>
        <li>Metode Penelitian Survei</li>
        <li>Populasi dan Sampel</li>
        <li>Teknik Pengumpulan Data Kuesioner dengan Pertanyaan Penilaian Berskala dan Pertanyaan Terbuka</li>
        <li>Uji Reliabilitas dan Validitas</li>
      </ol>
    ),
    img: require("./img/method.jpg")
  },
  {
    id: 7,
    title: () => (
      "Kajian Pustaka."
    ),
    desc: () => (
      <p>
        Perkembangan teori perilaku terencana dan fenome penghindaran iklan dalam kaitannya dengan iklan <em>pop-up</em> dan generasi Z.
      </p>
    ),
    img: require("./img/definition.jpg")
  },
  {
    id: 8,
    title: () => (
      <small className="text-nowrap"><strong>Pengguna Shopee: Gen Z.</strong></small>
    ),
    desc: () => (
      <ol className="text-left">
        <li>Tentang gen Z</li>
        <li>Latar belakang Shopee</li>
      </ol>
    ),
    img: require("./img/profil.jpeg")
  },
  {
    id: 9,
    title: () => (
      "Pembahasan."
    ),
    desc: () => (
      <p>
        Perilaku Penghindaran Pengguna Generasi Z di Yogyakarta terhadap Iklan <em>Pop-up</em> "Semua Pasti Ada di Shopee"
      </p>
    ),
    img: require("./img/shopee-pasti-ada.jpg")
  },
  {
    id: 10,
    title: () => (
      "Info Demografis."
    ),
    desc: () => (
      <div className="text-left d-flex justify-content-between" style={{ lineHeight: 1 }}>
        <div>
          <p className="text-center">Jenis Kelamin</p>
          <ul>
            <li><small>Laki-laki: 61 (27,1%)</small></li>
            <li><small>Perempuan: 164 (72,9%)</small></li>
          </ul>
        </div>
        <div>
          <p className="text-center">Usia</p>
          <ul>
            <li><small>16 tahun: 25 (11,1%)</small></li>
            <li><small>17 tahun: 17 (7,6%)</small></li>
            <li><small>18 tahun: 17 (7,6%)</small></li>
            <li><small>19 tahun: 48 (21,3%)</small></li>
            <li><small>20 tahun: 31 (13,8%)</small></li>
            <li><small>21 tahun: 22 (9,8%)</small></li>
            <li><small>22 tahun: 38 (16,9%)</small></li>
            <li><small>23 tahun: 27 (12%)</small></li>
          </ul>
        </div>
        <div>
          <p className="text-center">Domisili</p>
          <ul>
            <li><small>Bantul: 82 (36,4%)</small></li>
            <li><small>Gunung Kidul: 4 (1,8%)</small></li>
            <li><small>Kulon Progo: 6 (2,7%)</small></li>
            <li><small>Sleman: 102 (45,3%)</small></li>
            <li><small>Yogyakarta: 31 (13,8%)</small></li>
          </ul>
        </div>
      </div>
    ),
    img: require("./img/demografis.jpg")
  },
  {
    id: 11,
    title: () => (
      "Awareness."
    ),
    desc: () => (
      <ul className="text-left">
        <li>Mengenal Shopee: 217/225 (96,4%)</li>
        <li>Pernah melihat iklan <em>pop-up</em>: 215/225 (95,6%)</li>
        <li>Pernah melihat iklan <em>pop-up</em> "Semua Pasti Ada di Shopee": 199/225 (88,4%)</li>
      </ul>
    ),
    img: require("./img/awareness.webp")
  },
  {
    id: 12,
    title: () => (
      <small><strong>Tingkat Penghindaran.</strong></small>
    ),
    desc: () => (
      <ul className="text-left">
        <li>Alasan</li>
        <li>Pertimbangan</li>
        <li>Pengaruh pada niat</li>
        <li>Niat berperilaku</li>
        <li>Perilaku penghindaran</li>
        <li>Pengaruh lainnya</li>
      </ul>
    ),
    img: require("./img/angry.jpg")
  },
  {
    id: 13,
    title: () => (
      "Kesimpulan."
    ),
    desc: () => (
      <p>
        Iklan <em>pop-up</em> "Semua Pasti Ada di Shopee" telah terbukti memiliki pengaruh yang besar terhadap perilaku penghindaran generasi Z di Yogyakarta.
      </p>
    ),
    img: require("./img/conclusion.jpg")
  },
  {
    id: 14,
    title: () => (
      ""
    ),
    desc: () => (
      ""
    ),
    img: require("./img/thankyou.jpg")
  }
]

const CarouselItem = ({ id, title, desc, img, className }) => (
  <div id={`halaman${id+1}`} className={className} data-halaman={id}>
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
		<div className={`carousel-caption mt-5 p-5 h-75 ${id+1!==data.length?"d-block":"d-none"}`}>
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

const pageAfter = throttle((pages, direction) => {
	switch (direction.type) {
		case "prev":
			return pages.current===initialPage ? pages.length-1 : pages.current - 1
		case "next":
			return pages.current===pages.length-1 ? initialPage : pages.current + 1
		default:
			return pages.current
	}
}, 1000, {})

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


const initialPage = 0

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
		// console.log(("[data-slide-to]"))
	}

  render() {
    return (
      <div>
				<ol className="carousel-indicators d-none">
					{
						data.map(i=>(
							<li data-target="#carousel" data-slide-to={i.id}
								className={i.id!==this.state.page.current?"":"active"}
								onClick={() => {
									// this.setState({ page: { current: i.id } })
								}}
							/>
						))
					}
			  </ol>
				{
					this.state.whichPresentation === "thumbnail" ?
						<ThumbnailPresentation
							onClickClose = {() => {
								this.setState({ whichPresentation: "carousel" })
								// console.log(this.state.page.current)
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
								// go to page selected
								const promiseUpdateActiveClass = new Promise((resolve, reject) => {
									resolve(this.forceUpdate())
								})
								promiseUpdateActiveClass.then(() => {
									$(`ol.carousel-indicators li[data-slide-to="${clickedThumbnailPage}"]`).click()
									// console.log(clickedThumbnailPage)
								})
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
										{(this.state.page.current+1)<10?"0"+(this.state.page.current+1):(this.state.page.current+1)}
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
									onClick={throttle(()=>{document.querySelector("[data-slide='prev']").click()}, 1000, {})}
									disabled={this.state.page.current===initialPage}
								>
									<FaChevronLeft />
								</button>
								<button id="nextBtn" className="rounded-circle px-2 pb-1 pt-0 ml-2"
									onClick={throttle(()=>{document.querySelector("[data-slide='next']").click()}, 1000, {})}
									disabled={this.state.page.current===data.length-1}
								>
									<FaChevronRight />
								</button>
							</div>
			        <div id="carousel" className="carousel slide" data-interval="false">
								<div className="carousel-inner">
									{
										data.map(i => (
											<CarouselItem id={i.id} title={i.title} desc={i.desc} img={i.img}
												className={`carousel-item ${i.id===initialPage?"active":""}`} />
										))
									}
								</div>
								{
									this.state.page.current===initialPage ?
										(
											<CarouselControl direction="next" read="Next"
												onClick={(e)=>{this.handleSlideController(e)}}
											/>
										)
									: this.state.page.current===data.length-1 ?
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
