import PropTypes from 'prop-types';
import NextImage from 'next/image';
import moment from 'moment';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Box from '@mui/material/Box';
import courseData from '@/datas/course';

import courseStyle from '@/components/cards/course.style';

const { courseTypeMap } = courseData;
const {
  CourseListItem,
  CourseListItemImage,
  CollectIcon,
  CourseListItemContent,
  CourseListItemContentHeader,
  CourseListItemContentBody,
} = courseStyle;

function CourseCard({
  coverPic,
  courseName,
  price,
  courseType,
  courseHours,
  classStartTime,
  isEnsure,
  isCollection,
  onChangeCollection,
}) {
  return (
    <CourseListItem sx={12}>
      <CourseListItemImage>
        <NextImage src={coverPic} width={1920} height={1080} />
        <CollectIcon
          onClick={() => onChangeCollection(
            courseName,
            !isCollection,
          )}
        >
          {isCollection ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
        </CollectIcon>
      </CourseListItemImage>
      <CourseListItemContent>
        <CourseListItemContentHeader>
          <Box className="content-header-title">{courseName}</Box>
          <Box className="content-header-price">{`NT$ ${price}`}</Box>
        </CourseListItemContentHeader>
        <CourseListItemContentBody>
          <Box sx={{ color: courseTypeMap[courseType]?.color || '' }}>
            {courseTypeMap[courseType]?.title || ''}
          </Box>
          <span className="split-dot" />
          {
            !isEnsure
              ? (
                <span>
                  {moment(classStartTime).format('YYYY/MM/DD')}
                  開課
                </span>
              )
              : (
                <span>
                  {+(courseHours / 60 / 60).toFixed(1) || 0}
                  小時
                </span>
              )
          }
        </CourseListItemContentBody>
      </CourseListItemContent>
    </CourseListItem>
  );
}

CourseCard.propTypes = {
  coverPic: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  price: PropTypes.number,
  courseType: PropTypes.string,
  courseHours: PropTypes.number,
  classStartTime: PropTypes.number,
  isEnsure: PropTypes.number,
  isCollection: PropTypes.oneOf([0, 1]),
  onChangeCollection: PropTypes.func,
};

CourseCard.defaultProps = {
  price: 0,
  courseType: 'online',
  courseHours: 0,
  classStartTime: 0,
  isEnsure: 1,
  isCollection: 0,
  onChangeCollection: () => { },
};

export default CourseCard;
