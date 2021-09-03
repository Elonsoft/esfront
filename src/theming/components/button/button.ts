import { Component } from '../component';
import { keyframes } from '@mui/system';

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const createButton: Component<'MuiButton'> = (theme, typography) => {
  return {
    defaultProps: {
      disableElevation: true,
      size: 'md'
    },
    styleOverrides: {
      root: {
        minWidth: 0,
        '& .MuiTouchRipple-root': {
          transitionDuration: `${theme.transitions.duration.short}ms`
        },
        '& .MuiTouchRipple-rippleVisible': {
          animationName: `${enterKeyframe} !important`,
          opacity: '1 !important'
        },
        '&.Mui-disabled': {
          '&.MuiButton-text, &.MuiButton-outlined, &.MuiButton-contained': {
            color: theme.palette.monoA.A400
          },
          '&.MuiButton-outlined': {
            border: 0,
            boxShadow: `inset 0px 0px 0px 1px ${theme.palette.monoA.A150}`
          },
          '&.MuiButton-contained': {
            backgroundColor: theme.palette.monoA.A75
          }
        },
        '&.MuiButton-sizeXs': {
          ...typography.body100,
          fontWeight: 400,
          height: 24,
          padding: '0 6px',
          textTransform: 'none',
          '& .MuiButton-startIcon': {
            marginLeft: -2,
            marginRight: 2
          },
          '& .MuiButton-endIcon': {
            marginLeft: 2,
            marginRight: -2
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root': {
            margin: '0 -4px'
          }
        },
        '&.MuiButton-sizeSm': {
          height: 32,
          padding: '0 12px',
          '& .MuiButton-startIcon': {
            marginLeft: -4,
            marginRight: 4
          },
          '& .MuiButton-endIcon': {
            marginLeft: 4,
            marginRight: -4
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root': {
            margin: '0 -8px'
          }
        },
        '&.MuiButton-sizeMd': {
          height: 40,
          padding: '0 16px',
          '& .MuiButton-startIcon': {
            marginLeft: -4,
            marginRight: 8
          },
          '& .MuiButton-endIcon': {
            marginLeft: 8,
            marginRight: -4
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root': {
            margin: '0 -8px'
          },
          '&.MuiButton-text': {
            padding: '0 8px',
            '& .MuiButton-startIcon': {
              marginLeft: 0
            },
            '& .MuiButton-endIcon': {
              marginRight: 0
            },
            '& > .MuiIcon-root, & > .MuiSvgIcon-root': {
              margin: 0
            }
          }
        },
        '&.MuiButton-sizeLg': {
          height: 48,
          padding: '0 16px',
          '& .MuiButton-startIcon': {
            marginLeft: -4,
            marginRight: 8
          },
          '& .MuiButton-endIcon': {
            marginLeft: 8,
            marginRight: -4
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root': {
            margin: '0 -4px'
          },
          '&.MuiButton-text': {
            padding: '0 8px',
            '& .MuiButton-startIcon': {
              marginLeft: 0
            },
            '& .MuiButton-endIcon': {
              marginRight: 0
            },
            '& > .MuiIcon-root, & > .MuiSvgIcon-root': {
              margin: '0 4px'
            }
          }
        },
        '&.MuiButton-sizeXl': {
          height: 56,
          padding: '0 20px',
          '& .MuiButton-startIcon': {
            marginLeft: -4,
            marginRight: 8
          },
          '& .MuiButton-endIcon': {
            marginLeft: 8,
            marginRight: -4
          },
          '& > .MuiIcon-root, & > .MuiSvgIcon-root': {
            margin: '0 -4px'
          },
          '&.MuiButton-text': {
            padding: '0 12px',
            '& .MuiButton-startIcon': {
              marginLeft: 0
            },
            '& .MuiButton-endIcon': {
              marginRight: 0
            },
            '& > .MuiIcon-root, & > .MuiSvgIcon-root': {
              margin: '0 4px'
            }
          }
        }
      },
      text: {
        '&, &:hover, &:active': {
          backgroundColor: 'transparent'
        },
        '&.MuiButton-textInherit': {
          '&, &:hover, &:active': {
            color: theme.palette.monoA.A700
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.monoA.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.monoA.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.monoA.A200
            }
          }
        },
        '&.MuiButton-textPrimary': {
          '&, &:hover, &:active': {
            color: theme.palette.primary[300]
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.primary.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.primary.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.primary.A200
            }
          }
        },
        '&.MuiButton-textSecondary': {
          '&, &:hover, &:active': {
            color: theme.palette.secondary[300]
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.secondary.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.secondary.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.secondary.A200
            }
          }
        },
        '&.MuiButton-textError': {
          '&, &:hover, &:active': {
            color: theme.palette.error[300]
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.error.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.error.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.error.A200
            }
          }
        }
      },
      outlined: {
        '&, &:hover, &:active': {
          backgroundColor: 'transparent'
        },
        '&, &:hover, &:active, &:focus': {
          boxShadow: `inset 0px 0px 0px 1px ${theme.palette.monoA.A200}`
        },
        '&.MuiButton-outlinedInherit': {
          border: 0,
          '&, &:hover, &:active': {
            color: theme.palette.monoA.A700
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.monoA.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.monoA.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.monoA.A200
            }
          }
        },
        '&.MuiButton-outlinedPrimary': {
          border: 0,
          '&, &:hover, &:active': {
            color: theme.palette.primary[300]
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.primary.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.primary.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.primary.A200
            }
          }
        },
        '&.MuiButton-outlinedSecondary': {
          border: 0,
          '&, &:hover, &:active': {
            color: theme.palette.secondary[300]
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.secondary.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.secondary.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.secondary.A200
            }
          }
        },
        '&.MuiButton-outlinedError': {
          border: 0,
          '&, &:hover, &:active': {
            color: theme.palette.error[300]
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.error.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.error.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.error.A200
            }
          }
        }
      },
      contained: {
        '& .MuiTouchRipple-root': {
          color: theme.palette.monoB.A150
        },
        '&:hover': {
          '& .MuiTouchRipple-root': {
            backgroundColor: theme.palette.monoB.A50
          }
        },
        '&:focus-visible': {
          '& .MuiTouchRipple-root': {
            color: theme.palette.monoB.A200
          }
        },
        '&.MuiButton-containedInherit': {
          '&, &:hover, &:active': {
            backgroundColor: theme.palette.monoA.A100,
            color: theme.palette.monoA.A800
          },
          '& .MuiTouchRipple-root': {
            color: theme.palette.monoA.A150
          },
          '&:hover': {
            '& .MuiTouchRipple-root': {
              backgroundColor: theme.palette.monoA.A50
            }
          },
          '&:focus-visible': {
            '& .MuiTouchRipple-root': {
              color: theme.palette.monoA.A200
            }
          }
        },
        '&.MuiButton-containedPrimary': {
          '&, &:hover, &:active': {
            backgroundColor: theme.palette.primary[300],
            color: theme.palette.monoB[500]
          }
        },
        '&.MuiButton-containedSecondary': {
          '&, &:hover, &:active': {
            backgroundColor: theme.palette.secondary[300],
            color: theme.palette.monoB[500]
          }
        },
        '&.MuiButton-containedError': {
          '&, &:hover, &:active': {
            backgroundColor: theme.palette.error[300],
            color: theme.palette.monoB[500]
          }
        }
      }
    }
  };
};
