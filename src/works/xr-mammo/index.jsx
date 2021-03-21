import React, { Fragment } from 'react'
import VideoA from './map-pointer.mp4'
import VideoB from './window-width.mp4'
import styled from 'styled-components'

const Video = styled.video`
	width: 100%;
	margin: auto;
	display: block;
`

const Container = styled.div`
	display: block;
	margin: auto !important;
	max-width: 720px;
	color: white;
`

const Content = () => (
	<Fragment>
		<Container>
			<Video src={VideoA} type='video/mp4' controls></Video>
			<p>
				上侧两图为乳腺"头角位" （俯视），下侧两图为"侧位"（侧视）。
				<strong>跨体位映射</strong>
				功能，可以辅助医生在两种体位上定位同一个病灶。 鼠标拖拽时，在另一个体位上映射绿色条带。条带需要在鼠标移动，且图像平移缩放以后，仍准确贴合人体组织。
			</p>
			<Video style={{maxWidth: 300+ 'px'}} src={VideoB} type='video/mp4' controls></Video>
			<p>在医学影像领域中，<b>窗宽窗位</b>是用以观察不同密度的组织和病变的一种显示技术。窗宽是CT图像上显示的CT值范围，在此CT值范围内的组织和病变均以不同的模拟灰度显示。而高于的部分则均显示为白色，而低于的部分都显示为黑色。窗位是窗宽的中心位置，视频中鼠标的操作便是调节窗位。</p>
			<p>老方案：需要从 Canvas 中取所有像素并且逐一计算，计算量大且消耗内存。我的优化方案：使用SVG Filter中的 <code>&lt;feComponentTransfer&gt;</code>, 此滤镜支持对每个像素执行颜色分量的数据重映射。</p>
		</Container>
	</Fragment>
)

const xrMammo = {
	id: 'xr-mammo',
	title: '医学影像',
	thumbnail: require('./thumbnail.webp').default,
	directLink: null,
	content: Content
}

export default xrMammo
