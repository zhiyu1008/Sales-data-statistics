/**
 * @author YangLing
 * @date 2022/4/19 2:27 PM
 */
(function() {
	$(document).ready(function() {
		$(".monitor .tabs").on("click", "a", function() {
			$(this).addClass("active").siblings("a").removeClass()
			var index = $(this).index()
			$(".monitor .content").eq(index).show().siblings(".content").hide()
		})


		$(".monitor .marquee").each(function() {
			var rows = $(this).children().clone()
			$(this).append(rows)
		})
	})
})();


(function() {
	$(document).ready(function() {
		const pie = document.querySelector(".pie")
		const myChart = echarts.init(pie)
		const option = {
			color: ["#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8", "#32c5e9",
				"#1d9dff"
			],
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b} : {c} ({d}%)'
			},
			series: [{
				name: '销售统计',
				type: 'pie',
				radius: ["10%", "70%"],
				center: ['50%', '50%'],
				roseType: 'area',
				itemStyle: {
					borderRadius: 5
				},
				data: [{
						value: 22,
						name: "云南"
					},
					{
						value: 28,
						name: "北京"
					},
					{
						value: 25,
						name: "山东"
					},
					{
						value: 25,
						name: "河北"
					},
					{
						value: 32,
						name: "江苏"
					},
					{
						value: 22,
						name: "浙江"
					},
					{
						value: 31,
						name: "四川"
					},
					{
						value: 42,
						name: "上海"
					}
				],
				label: {
					fontSize: 10
				},
				labelLine: {
					length: 6,
					length2: 8
				}
			}]
		};
		myChart.setOption(option)

		window.addEventListener("resize", function() {
			myChart.resize()
		})
	})
})();


(function() {
	$(document).ready(function() {
		const bar = document.querySelector(".bar")
		const myChart = echarts.init(bar)
		const item = {
			name: "",
			value: 1200,
			itemStyle: {
				color: "#254065"
			},
			emphasis: {
				itemStyle: {
					color: "#254065"
				}
			},
			tooltip: {
				extraCssText: "opacity : 0"
			}
		}
		const option = {
			tooltip: {
				trigger: 'item',
			},
			grid: {
				left: '0%',
				right: '3%',
				bottom: '3%',
				top: "3%",
				containLabel: true,
				show: true,
				borderColor: "rgba(0,240,250,0.3)"
			},
			xAxis: [{
				type: 'category',
				data: [
					"上海",
					"广州",
					"北京",
					"深圳",
					"合肥",
					"",
					"......",
					"",
					"杭州",
					"厦门",
					"济南",
					"成都",
					"重庆"
				],
				axisTick: {
					alignWithLabel: true,
					show: false
				},
				axisLabel: {
					color: "#4c9bfd"
				},
				axisLine: {
					lineStyle: {
						color: "rgba(0,240,250,0.3)"
					}
				}
			}],
			yAxis: [{
				type: 'value',
				axisTick: {
					show: false
				},
				axisLabel: {
					color: "#4c9bfd"
				},
				axisLine: {
					lineStyle: {
						color: "rgba(0,240,250,0.3)"
					}
				},
				splitLine: {
					lineStyle: {
						color: "rgba(0,240,250,0.3)"
					}
				}
			}],
			series: [{
				name: '用户总量',
				type: 'bar',
				barWidth: '60%',
				data: [
					2100,
					1900,
					1700,
					1560,
					1400,
					item,
					item,
					item,
					900,
					750,
					600,
					480,
					240
				]
			}],
			color: {
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [{
					offset: 0,
					color: '#00fffb' // 0% 处的颜色
				}, {
					offset: 1,
					color: '#0061ce' // 100% 处的颜色
				}],
				global: false // 缺省为 false
			}
		};
		myChart.setOption(option)
		window.addEventListener("resize", function() {
			myChart.resize()
		})
	})
})();


(function() {
	const data = {
		day365: {
			orders: "30,321,988",
			amount: "99882"
		},
		day90: {
			orders: '301,987',
			amount: '9834'
		},
		day30: {
			orders: '1,987',
			amount: '3834'
		},
		day1: {
			orders: '987',
			amount: '834'
		}
	}



	$(document).ready(function() {
		let h4Order = $(".order h4:eq(0)")
		let h4Amount = $(".order  h4:eq(1)")

		console.log(h4Order.html())
		console.log(h4Amount.html())
		$(".order").on("click", ".filter a", function() {
			$(this).addClass("active").siblings("a").removeClass()


			const currData = data[this.dataset.type]
			h4Order.html(currData.orders)
			h4Amount.html(currData.amount)
		})
	})
})();


(function() {
	$(document).ready(function() {

		const data = {
			year: {
				info: ["2099年", "2199年", "2299年", "2399年", "2499年", "2599年", "2699年", "2799年", "2899年",
					"2999年", "3099年", "3199年"
				],
				detail: [
					[24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
					[40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
				],
			},


			quarter: {
				info: ["1季度", "2季度", "3季度", "4季度"],
				detail: [
					[23, 75, 12, 97],
					[43, 31, 65, 23]
				],

			},


			month: {
				info: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
				detail: [
					[34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
					[56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
				],
			},

			week: {
				info: ["近1周", "近2周", "近3周", "近4周", "近5周", "近6周"],
				detail: [
					[43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
					[32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
				]
			}
		};


		const line = document.querySelector(".line")
		const myChart = echarts.init(line)
		const option = {

			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['预期销售额', '实际销售额'],
				textStyle: {
					color: "#4c9bfd",
				},
				right: "10%"
			},
			grid: {
				top: "20%",
				left: '3%',
				right: '4%',
				bottom: '3%',
				show: true,
				borderColor: "#012f4a",
				containLabel: true
			},
			xAxis: {
				type: 'category',
				axisLabel: {
					color: "#4c9bfd"
				},
				axisTick: {
					show: false
				},
				axisLine: {
					show: true
				},
				boundaryGap: false,
				// data: ['第一周', '第二周','第三周','第四周']
				data: data.year.info
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					color: "#4c9bfd"
				},
				axisTick: {
					show: false
				},
				splitLine: {
					lineStyle: {
						color: "#012f4a"
					}
				}
			},
			color: ['#00f2f1', '#ed3f35'],
			series: [{
					name: '预期销售额',
					type: 'line',
					stack: 'Total',
					smooth: true,
					// data: [120, 132, 101, 134, 90, 230, 210]
					// data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
					data: data.year.detail[0]
				},
				{
					name: '实际销售额',
					type: 'line',
					stack: 'Total',
					smooth: true,
					// data: [220, 182, 191, 234, 290, 330, 310]
					// data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
					data: data.year.detail[1]
				}
			]
		};
		myChart.setOption(option)
		window.addEventListener("resize", function() {
			myChart.resize()
		})


		let index = 0
		let timer = null
		$(".sales").on("click", "a", function() {
			$(this).addClass("active").siblings("a").removeClass()
			index = $(this).index() - 1


			const type = this.dataset.type
			const currData = data[type]
			option.xAxis.data = currData.info
			option.series[0].data = currData.detail[0]
			option.series[1].data = currData.detail[1]
			myChart.setOption(option)
		})

		const as = $(".sales .caption a")


		move()

		$(".sales").hover(function() {
			clearInterval(timer)
		}, function() {
			move()
		})

		function move() {
			timer = setInterval(function() {
				index++
				if (index == 4) index = 0
				as.eq(index).click()
			}, 1000)
		}
	})
})();

(function() {
	$(document).ready(function() {
		const radar = document.querySelector(".radar")
		const myChart = echarts.init(radar)
		const dataSH = [
			[110, 90, 80, 60, 30]
		];
		const lineStyle = {
			normal: {
				color: '#fff'
			}
		};
		const option = {

			tooltip: {
				show: true,
				position: ['55%', '10%'],
				textStyle: {
					fontSize: 12,
					color: "#fff"
				},
				borderWidth: 0,
				backgroundColor: "rgba(0,0,0,0.3)"
			},
			radar: {
				indicator: [{
						name: '淘宝',
						max: 120
					},
					{
						name: '京东',
						max: 120
					},
					{
						name: '苏宁',
						max: 120
					},
					{
						name: '微商',
						max: 120
					},
					{
						name: '其他',
						max: 120
					}
				],
				center: ["50%", "50%"],
				radius: "50%",
				shape: 'circle',
				splitNumber: 4,
				name: {
					textStyle: {
						color: '#4c9bfd'
					}
				},
				splitLine: {
					lineStyle: {
						color: 'rgba(255,255,255,0.3)'
					}
				},
				splitArea: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255,255,255,0.3)'
					}
				}
			},
			series: [{
				name: '上海',
				type: 'radar',
				lineStyle: lineStyle,
				data: dataSH,
				symbol: 'circle',
				symbolSize: 5,
				itemStyle: {
					color: '#fff'
				},
				areaStyle: {
					color: 'rgba(238, 197, 102, 0.6)'
				}
			}]
		};
		myChart.setOption(option)
		window.addEventListener("resize", function() {
			myChart.resize()
		})
	})
})();

(function() {
	$(document).ready(function() {
		const gauge = document.querySelector(".gauge")
		const myChart = echarts.init(gauge)

		const option = {
			series: [{
				type: 'pie',
				radius: ['130%', '150%'],
				center: ['50%', '80%'],
				labelLine: {
					show: false
				},
				startAngle: 180,
				   // hoverAnimation:false,
				silent : true,   
				data: [{
						value: 100,
						itemStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
										offset: 0,
										color: '#00c9e0' // 0% 处的颜色
									},
									{
										offset: 1,
										color: '#005fc1' // 100% 处的颜色
									}
								],
								global: false // 缺省为 false
							}
						}
					},
					{
						value: 100,
						itemStyle: {
							color: '#12274d'
						}
					},
					{
						value: 200,
						itemStyle: {
							color: 'transparent'
						}
					}
				]
			}]
		};

		myChart.setOption(option)
		window.addEventListener("resize", function() {
			myChart.resize()
		})

	})
})();

(function(){
	$(document).ready(function(){
		
		
		const hotData = [
		    {
		        city: "北京", // 城市
		        sales: "35, 279", // 销售额
		        flag: true, //  上升还是下降
		        brands: [
		            //  品牌种类数据
		            {name: "华为", num: "9,086", flag: true},
		            {name: "小米", num: "8,341", flag: true},
		            {name: "oppo", num: "7,407", flag: false},
		            {name: "vivo", num: "6,080", flag: false},
		            {name: "荣耀", num: "6,724", flag: false},
		            {name: "iphone", num: "2,170", flag: true}
		        ]
		    },
		    {
		        city: "河北",
		        sales: "23,252",
		        flag: false,
		        brands: [
		            {name: "华为", num: "3,457", flag: false},
		            {name: "小米", num: "2,124", flag: true},
		            {name: "oppo", num: "8,907", flag: false},
		            {name: "vivo", num: "6,080", flag: true},
		            {name: "荣耀", num: "1,724", flag: false},
		            {name: "iphone", num: "1,170", flag: false}
		        ]
		    },
		    {
		        city: "上海",
		        sales: "20,760",
		        flag: true,
		        brands: [
		            {name: "华为", num: "2,345", flag: true},
		            {name: "小米", num: "7,109", flag: true},
		            {name: "oppo", num: "3,701", flag: false},
		            {name: "vivo", num: "6,080", flag: false},
		            {name: "荣耀", num: "2,724", flag: false},
		            {name: "iphone", num: "2,998", flag: true}
		        ]
		    },
		    {
		        city: "江苏",
		        sales: "23,252",
		        flag: false,
		        brands: [
		            {name: "华为", num: "2,156", flag: false},
		            {name: "小米", num: "2,456", flag: true},
		            {name: "oppo", num: "9,737", flag: true},
		            {name: "vivo", num: "2,080", flag: true},
		            {name: "荣耀", num: "8,724", flag: true},
		            {name: "iphone", num: "1,770", flag: false}
		        ]
		    },
		    {
		        city: "山东",
		        sales: "20,760",
		        flag: true,
		        brands: [
		            {name: "华为", num: "9,567", flag: true},
		            {name: "小米", num: "2,345", flag: false},
		            {name: "oppo", num: "9,037", flag: false},
		            {name: "vivo", num: "1,080", flag: true},
		            {name: "荣耀", num: "4,724", flag: false},
		            {name: "iphone", num: "9,999", flag: true}
		        ]
		    }
		];
		
		let supHtml = ""
		$.each(hotData,function(index,item){
			supHtml += `
				<li class="">
					<span>${item.city}</span>
					<span>${item.sales}<s class="${item.flag ? 'icon-up' : 'icon-down'}"></s></span>
				</li>
			`
		}) 
		$(".province .sup").html(supHtml)
		
		let index = 0
		let timer = null
		let lis = $(".province .sup li")
		 	
		$(".province .sup").on("mouseenter","li",function(){
			index = $(this).index()
			render(lis.eq(index))
			
		})
		
		render(lis.eq(index))
		
		function render(curElement){
			curElement.addClass("active").siblings("li").removeClass()
			const brands = hotData[index].brands
			let subHtml = ""
			$.each(brands,function(index,item){
				subHtml += `
					<li>
						<span>${item.name}</span>
						<span> ${item.num}<s class="${item.flag ? 'icon-up' : 'icon-down'}"></s></span>
					</li>
				`
			})
			$(".province .sub").html(subHtml)
		}
		
		function toggleProvince(){
			timer = setInterval(function(){
				index++
				if(index === 5) index = 0
				render(lis.eq(index))
				
			},2000)
		}
		toggleProvince()
		
		$(".province .sup").hover(function(){
			clearInterval(timer)
		},function(){
			clearInterval(timer)
			toggleProvince()
		})
		
	})
	
	
	
})()


























/*
			$(this).addClass("active").siblings("li").removeClass()
			const brands = hotData[$(this).index()].brands
			let subHtml = ""
			$.each(brands,function(index,item){
				subHtml += `
					<li>
						<span>${item.name}</span>
						<span> ${item.num}<s class="${item.flag ? 'icon-up' : 'icon-down'}"></s></span>
					</li>
				`
			})
			$(".province .sub").html(subHtml)
			*/
		   
		   
		   
		   
		   
		   
		   /*
		   lis.eq(index).addClass("active").siblings("li").removeClass()
		   const brands = hotData[index].brands
		   let subHtml = ""
		   $.each(brands,function(index,item){
		   	subHtml += `
		   		<li>
		   			<span>${item.name}</span>
		   			<span> ${item.num}<s class="${item.flag ? 'icon-up' : 'icon-down'}"></s></span>
		   		</li>
		   	`
		   })
		   $(".province .sub").html(subHtml)
		   */
		  
		  
		  /*
		  lis.eq(index).addClass("active").siblings("li").removeClass()
		  const brands = hotData[index].brands
		  let subHtml = ""
		  $.each(brands,function(index,item){
		  	subHtml += `
		  		<li>
		  			<span>${item.name}</span>
		  			<span> ${item.num}<s class="${item.flag ? 'icon-up' : 'icon-down'}"></s></span>
		  		</li>
		  	`
		  })
		  $(".province .sub").html(subHtml)
		  */