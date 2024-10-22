import style from '@/components/blogPreview.module.css'

type IComment = {
  user: string;
  comment: string;
  time: Date;
}

{/* Modularizing code into seperate functions is useful.
  Makes your code look nicer and allows for better readability.
*/}
function parseCommentTime(time: Date){
  /*
    Parses MongoDB/TS date object
    :param time: date object
    :return: string reprsenting date
    */
    // Convert to Los Angeles time
    const losAngelesDate = new Date(
      time.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );

  // Format the date as desired
  const formattedDate = losAngelesDate.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
  });
  return formattedDate;
}


function Comment({ comment }: {comment: IComment}) {
  return (
    <div className='centered'>
      <div className='top'>
        <h3>{comment.user}</h3>
        <span>{parseCommentTime(comment.time)}</span>
      </div>
      <div className='bottom'>
        <p>{comment.comment}</p>
      </div>
    </div>

  );
}

export default Comment;