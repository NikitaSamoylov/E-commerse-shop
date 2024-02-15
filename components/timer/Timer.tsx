'use client';
import { useEffect, useState } from 'react';
import { Flex } from 'antd';
import styles from './Timer.module.scss';

type TTimer = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountDown: React.FC = () => {
  const calculateTimeLeft = (): TTimer | null => {
    const difference = +new Date('2024-05-14T21:41:07+00:00') - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (3600000)) % 24),
        minutes: Math.floor((difference / 60000) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      return null;
    };
  };

  const [timeLeft, setTimeLeft] = useState<TTimer | null>(calculateTimeLeft());


  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const wordsEnd = (number: number | undefined, words: string[]) => {
    if (typeof number == 'number') {
      return (
        words[(number % 100 > 0o4 && number % 100 < 20)
          ? 2
          : [2, 0, 1, 1, 1, 2]
          [(number % 10 < 5)
            ? Math.abs(number) % 10
            : 5]
        ]
      );
    };
  };

  const daysWord = wordsEnd(timeLeft?.days, ['день', 'дня', 'дней']);
  const hoursWord = wordsEnd(timeLeft?.hours, ['час', 'часа', 'часов']);
  const minutesWord = wordsEnd(timeLeft?.minutes, ['минута', 'минуты', 'минут']);
  const secondsWord = wordsEnd(timeLeft?.seconds, ['секунда', 'секунды', 'секунд']);

  const showTimer = () => {
    if (timeLeft !== null) {
      return (
        <div>
          <Flex gap={ 5 } align="top">
            <div>
              { timeLeft.days
                !== undefined && timeLeft.days
                > 0
                ? <div className={ styles.date__days }>
                  {
                    timeLeft.days
                      .toString()
                      .split('')
                      .length <= 1
                      ? '0' + timeLeft.days
                      : timeLeft.days
                  }
                  <div className={ styles.date__descr }>
                    { daysWord }
                  </div>
                </div>
                : null
              }
            </div>
            <div className={ styles.date__divider }>:</div>
            <div>
              { timeLeft.hours
                !== undefined && timeLeft.hours
                > 0
                ? <div className={ styles.date__hours }>
                  {
                    timeLeft.hours
                      .toString()
                      .split('')
                      .length <= 1
                      ? '0' + timeLeft.hours
                      : timeLeft.hours
                  }
                  <div className={ styles.date__descr }>
                    { hoursWord }
                  </div>
                </div>
                : null
              }
            </div>
            <div className={ styles.date__divider }>:</div>
            <div>
              { timeLeft.minutes
                !== undefined && timeLeft.minutes
                > 0
                ? <div className={ styles.date__minutes }>
                  {
                    timeLeft.minutes
                      .toString()
                      .split('')
                      .length <= 1
                      ? '0' + timeLeft.minutes
                      : timeLeft.minutes
                  }
                  <div className={ styles.date__descr }>
                    { minutesWord }
                  </div>
                </div>
                : null
              }
            </div>
            <div className={ styles.date__divider }>:</div>
            <div>
              <div className={ styles.date__seconds }>
                {
                  timeLeft.seconds
                    .toString()
                    .split('')
                    .length <= 1
                    ? '0' + timeLeft.seconds
                    : timeLeft.seconds
                }
                <div className={ styles.date__descr }>
                  { secondsWord }
                </div>
              </div>
            </div>
          </Flex>
        </div>
      )
    } else {
      return (
        <h3>
          Акция закончилась
        </h3>
      )
    };
  };

  return (
    <div >
      { showTimer() }
    </div>
  );
};


export { CountDown };